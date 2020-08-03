import React from 'react';
import { css } from 'theme-ui';

import { ExternalLink } from '../icons/external-link';
import { Pilot } from './pilot';
import { getFaction, getVendor } from './helpers';

// Component
// ---------------
const Header = ({ children }) => (
  <h5
    css={css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      mt: 0,
      mb: 3,
      fontSize: 4,
      lineHeight: 1,
    })}
  >
    {children}
  </h5>
);

/*#__PURE__*/
export const XWS = ({ list }) => {
  const { name, points, faction, pilots } = list;
  const title =
    name !== 'Unnamed Squadron' ? name : getFaction({ faction }).name;
  const vendor = getVendor(list);

  return (
    <div
      css={css({
        py: 3,
        px: 3,
        my: 4,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 2,
      })}
    >
      <Header>
        <span>
          {title} ({points})
        </span>
        <a
          href={vendor.link}
          title={`Open in ${vendor.name}`}
          target="_blank"
          rel="noopener noreferrer"
          css={css({
            color: 'text',
            ':hover': {
              color: 'accent',
            },
          })}
        >
          <ExternalLink />
        </a>
      </Header>
      {pilots.map(({ id, ship, points, upgrades }, idx) => (
        <Pilot
          key={idx}
          id={id}
          faction={faction}
          ship={ship}
          points={points}
          upgrades={upgrades}
        />
      ))}
    </div>
  );
};
