export const opponent = {
  description: '',
  faction: 'galacticempire',
  name: 'Unnamed Squadron',
  pilots: [
    {
      id: 'lieutenantsai',
      name: 'lieutenantsai',
      points: 51,
      ship: 'lambdaclasst4ashuttle',
      upgrades: { title: ['st321'] },
    },
    {
      id: 'coloneljendon',
      name: 'coloneljendon',
      points: 52,
      ship: 'lambdaclasst4ashuttle',
      upgrades: { crew: ['directorkrennic'] },
    },
    {
      id: 'nusquadronpilot',
      name: 'nusquadronpilot',
      points: 48,
      ship: 'alphaclassstarwing',
      upgrades: {
        sensor: ['firecontrolsystem'],
        torpedo: ['advprotontorpedoes'],
        missile: ['barragerockets'],
        configuration: ['os1arsenalloadout'],
      },
    },
    {
      id: 'nusquadronpilot',
      name: 'nusquadronpilot',
      points: 48,
      ship: 'alphaclassstarwing',
      upgrades: {
        sensor: ['firecontrolsystem'],
        torpedo: ['advprotontorpedoes'],
        missile: ['barragerockets'],
        configuration: ['os1arsenalloadout'],
      },
    },
  ],
  points: 199,
  vendor: {
    yasb: {
      builder: 'Yet Another Squad Builder 2.0',
      builder_url: 'https://raithos.github.io/',
      link:
        'https://raithos.github.io/?f=Galactic%20Empire&d=v8ZsZ200Z166XWWWWW162Y167XWW28WWWY164X113W134W97WW139WWY164X113W134W97WW139WW&sn=Unnamed%20Squadron&obs=',
    },
  },
  version: '2.0.0',
};

export const mine = {
  description: '',
  faction: 'firstorder',
  name: 'Unnamed Squadron',
  pilots: [
    {
      id: 'majorvonreg',
      name: 'majorvonreg',
      points: 59,
      ship: 'tiebainterceptor',
      upgrades: { talent: ['daredevil'] },
    },
    { id: 'kyloren', name: 'kyloren', points: 76, ship: 'tievnsilencer' },
    { id: 'scorch', name: 'scorch', points: 33, ship: 'tiefofighter' },
    {
      id: 'lieutenantrivas',
      name: 'lieutenantrivas',
      points: 27,
      ship: 'tiefofighter',
    },
  ],
  points: 195,
  vendor: {
    yasb: {
      builder: 'Yet Another Squad Builder 2.0',
      builder_url: 'https://raithos.github.io/',
      link:
        'https://raithos.github.io/?f=First%20Order&d=v8ZsZ200Z381X117WWWY236XWWWY262XWWY265XW&sn=Unnamed%20Squadron&obs=coreasteroid5,gascloud4,gascloud5',
    },
  },
  version: '2.0.0',
  obstacles: ['coreasteroid5', 'gascloud4', 'gascloud5'],
};
