/**
 * Transform the excellent `xwing-data2` in a more convenient format for the usage
 * with a component and gastby. Meaning, only required data, aggregate and flatten
 * the data as much as possible.
 */
const path = require('path');
const writeJson = require('write-json-file').sync;
const PROJECT_ROOT = path.resolve(__dirname, '..');
const TARGET = path.join(PROJECT_ROOT, 'src/data/xws.json');

// `xwing-data2` has no main field in its package.json so we can use `path.resolve`.
const XWS_DATA_ROOT = path.resolve(PROJECT_ROOT, 'node_modules/xwing-data2');
const readXWSData = file => require(path.resolve(XWS_DATA_ROOT, file));

// The manifest holds all file paths
const manifest = readXWSData('data/manifest.json');

// Faction Data
// ---------------
const transformPilotsData = pilots =>
  pilots.reduce((o, pilot) => {
    const { xws: id, name, cost, image } = pilot;
    o[id] = {
      id,
      name,
      image,
    };

    return o;
  }, {});

/**
 * Transforms XWS data to `<faction id>.<ship id>.pilots.<pilot id>`,
 * where the id is the corresponding XWS key.
 *
 * ```
 * interface Ships {
 *   id: string;
 *   name: string;
 *   pilots: {
 *     [pilot_id: string]: {
 *       id: string;
 *       name: string;
 *       image: string;
 *     }
 *   }
 * }
 * ```
 */
const getShipsByFaction = faction => {
  const files = manifest.pilots.find(item => item.faction === faction).ships;
  return files.reduce((o, file) => {
    const { xws: id, name, pilots } = readXWSData(file);
    o[id] = {
      id,
      name,
      pilots: transformPilotsData(pilots),
    };
    return o;
  }, {});
};

const factions = readXWSData(manifest.factions[0]).reduce((o, faction) => {
  const { xws: id, name, icon } = faction;

  o[faction.xws] = {
    id,
    name,
    icon,
    ships: getShipsByFaction(id),
  };

  return o;
}, {});

// Upgrades
// ---------------
const upgrades = manifest.upgrades
  .map(file => readXWSData(file))
  .flat()
  .map(({ xws, name, sides }) => ({
    id: xws,
    name,
    image: sides[0].image,
  }));

// Write to file
// ---------------
writeJson(TARGET, { factions, upgrades });
