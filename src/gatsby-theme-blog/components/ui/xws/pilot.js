import React from 'react';
import { css } from 'theme-ui';
import { getPilot, getUpgrades, getShip } from './helpers';

const IMAGE_SIZE = 20;

const Icon = ({ src }) => (
  <img
    src={src}
    alt="Ship Icon"
    css={css({
      filter: 'invert(1)',
      paddingRight: 1,
      height: IMAGE_SIZE,
      width: IMAGE_SIZE,
    })}
  />
);

/*#__PURE__*/
export const Pilot = ({ faction, ship, id, upgrades, points }) => {
  const pilot = getPilot({ faction, ship, pilot: id });
  const { icon } = getShip({ faction, ship }) || {};
  const listOfUpgrades = getUpgrades({ upgrades });
  return (
    <div css={css({ mb: 3, ':last-child': { mb: 0 } })}>
      <div
        css={css({
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <Icon src={icon} />
        <span
          css={css({
            fontSize: 2,
            fontWeight: 'bold',
          })}
        >
          {pilot.name} ({points})
        </span>
      </div>
      {Boolean(listOfUpgrades.length) && (
        <ul
          css={css({
            listStyle: 'none',
            margin: 0,
            pl: IMAGE_SIZE,
          })}
        >
          {listOfUpgrades.map((u, idx) => (
            <li
              key={idx}
              css={css({ color: 'grey', fontSize: 1, lineHeight: 1.4 })}
            >
              {u.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
