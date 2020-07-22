/**
 * This is definitely not the Gatsby way ... but it works.
 * We do not want this data on a page level, so using static query
 * doesn't seems to be the right way.
 *
 * We try to tell webpack that this is a pure function (component) instead.
 */
import data from '../../../../data/xws.json';

/*#__PURE__*/
export const getFaction = ({ faction }) => data.factions[faction];

/*#__PURE__*/
export const getShip = ({ faction, ship }) =>
  getFaction({ faction })?.ships[ship];

/*#__PURE__*/
export const getPilot = ({ faction, ship, pilot }) =>
  getShip({ faction, ship })?.pilots[pilot];

/*#__PURE__*/
export const getUpgrades = ({ upgrades = {} }) =>
  Object.values(upgrades)
    // @ts-ignore
    .flat()
    .map(upgrade => data.upgrades[upgrade]);

/*#__PURE__*/
export const getVendor = xws => {
  if (xws.vendor.yasb) {
    return { name: 'YASB 2.0', link: xws.vendor.yasb.link };
  }

  const vendor = Object.keys(xws.vendor)[0];
  return { name: vendor, link: xws.vendor[vendor].link };
};
