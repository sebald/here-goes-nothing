import React from 'react';
/**
 * This is definitely not the Gatsby way ... but it works.
 * We do not want this data on a page level, so using static query
 * doesn't seems to be the right way.
 */
import data from '../../../data/xws.json';

export const XWS = ({ list }) => {
  return <span>{JSON.stringify(data)}</span>;
};
