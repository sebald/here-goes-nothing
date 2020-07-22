import React from 'react';
import { css } from 'theme-ui';
import { XWS } from '../gatsby-theme-blog/components/ui';

const data = {
  description: '',
  faction: 'firstorder',
  name: 'XWS Test Squad',
  pilots: [
    {
      id: 'majorvonreg',
      name: 'majorvonreg',
      points: 65,
      ship: 'tiebainterceptor',
      upgrades: { talent: ['daredevil'], missile: ['magpulsewarheads'] },
    },
    {
      id: 'kyloren',
      name: 'kyloren',
      points: 80,
      ship: 'tievnsilencer',
      upgrades: { tech: ['advancedoptics'] },
    },
    {
      id: 'epsilonsquadroncadet',
      name: 'epsilonsquadroncadet',
      points: 25,
      ship: 'tiefofighter',
    },
    {
      id: 'epsilonsquadroncadet',
      name: 'epsilonsquadroncadet',
      points: 25,
      ship: 'tiefofighter',
    },
  ],
  points: 195,
  vendor: {
    yasb: {
      builder: 'Yet Another Squad Builder 2.0',
      builder_url: 'https://raithos.github.io/',
      link:
        'https://raithos.github.io/?f=First%20Order&d=v8ZsZ200Z381X117WW311WY236XW186WWY269XWY269XW&sn=Unnamed%20Squadron&obs=coreasteroid5,gascloud4,gascloud5',
    },
  },
  version: '2.0.0',
  obstacles: ['coreasteroid5', 'gascloud4', 'gascloud5'],
};

const Test = () => (
  <div
    css={css({
      margin: 5,
    })}
  >
    <XWS list={data} />
  </div>
);

export default Test;
