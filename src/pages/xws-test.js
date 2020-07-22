import React from 'react';
import { css, Styled } from 'theme-ui';
import { XWS } from '../gatsby-theme-blog/components/ui';

const FO_LIST = {
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

const REBEL_LIST = {
  description: '',
  faction: 'rebelalliance',
  name: 'Unnamed Squadron',
  pilots: [
    {
      id: 'chopper',
      name: 'chopper',
      points: 80,
      ship: 'vcx100lightfreighter',
      upgrades: {
        crew: ['zeborrelios', 'sawgerrera'],
        modification: ['hullupgrade'],
      },
    },
    {
      id: 'lothalrebel',
      name: 'lothalrebel',
      points: 75,
      ship: 'vcx100lightfreighter',
      upgrades: { crew: ['k2so'], title: ['ghost'] },
    },
    {
      id: 'ap5',
      name: 'ap5',
      points: 45,
      ship: 'sheathipedeclassshuttle',
      upgrades: {
        talent: ['trickshot'],
        crew: ['leiaorgana'],
        astromech: ['r4astromech'],
        title: ['phantom'],
      },
    },
  ],
  points: 200,
  vendor: {
    yasb: {
      builder: 'Yet Another Squad Builder 2.0',
      builder_url: 'https://raithos.github.io/',
      link:
        'https://raithos.github.io/?f=Rebel%20Alliance&d=v8ZsZ200Z63XWWW65W58W164WWY64XWWW314WWWW148Y72X133W46WW5W167&sn=Unnamed%20Squadron&obs=',
    },
  },
  version: '2.0.0',
};

const Test = () => (
  <div
    css={css({
      margin: 5,
    })}
  >
    <Styled.h1>XWS List Test</Styled.h1>
    <XWS list={FO_LIST} />
    <XWS list={REBEL_LIST} />
  </div>
);

export default Test;
