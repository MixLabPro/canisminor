const Year = new Date().getFullYear();

module.exports = {
  intro: {
    skills: [
      { icon: '/img/vd-skill-interface.png', title: 'UI/UX Design' },
      { icon: '/img/vd-skill-brand.png', title: 'Branding Design' },
      { icon: '/img/vd-skill-manage.png', title: 'Design Management' },
      { icon: '/img/fe-skill-web.png', title: 'Web Frontend Devlopment' },
      { icon: '/img/fe-skill-react.png', title: 'React UI Library Devlopment' },
      { icon: '/img/fe-skill-sketch.png', title: 'Sketch Plugin Devlopment' },
    ],
    title: `Hello, I'm CanisMinor,|User Experience Designer &|Front-end Developer based|in Beijing, I create digital|products a more sexy and|usable place.`,
    desc: [
      `My name is Yufan Yang a.k.a CanisMinor,|${Year - 1990} years old with ${Year -
        2012} years design experience.|I graduated at China Academy of Art with a degree in Visual Communication Design where I discovered my passion for problem solving declined to user experience design.|I am currentky working as a ued director with knowledge abt design management and agile app development process.`,
      `I familiar with major front-end technology stack like react / vue and Alibaba's open-sourceprojects like antd / dva / roadhog. |I develop some Sketch plugins like Sketch Selectand Name as a third-party developer.|I am crazy about screeps, pet ants, cat and thirsty for new knowledge, experience and creating sexy things. If you need help of yourproject, feel free to contact me.`,
    ],
  },
  design: {},
  coding: [
    {
      cover: '/img/coding-select.png',
      title: 'sketch-select',
      desc: '🖱 Make it much more convenient to select layers with similar attributes.',
      type: 'sketch plugin',
      href: 'https://github.com/canisminor1990/sketch-selec',
    },
    {
      cover: '/img/coding-name.png',
      title: 'sketch-name-organizer',
      desc:
        '🖌 Rename and sort artboards based on their x and y position; Rename layers based on their Style and Symbol.',
      type: 'sketch plugin',
      href: 'https://github.com/canisminor1990/sketch-name-organizer',
    },
    {
      cover: '/img/coding-pand.png',
      title: 'panda-design',
      desc: '🐼 Panda Design React UI Components',
      type: 'react ui-kit',
      href: 'https://github.com/PandaUED/panda-design',
    },
    {
      cover: '/img/coding-bilibili.png',
      title: 'bilibili-client',
      desc: '📺 Bilibili Mini-Client # Mac/Win',
      type: 'electron',
      href: 'https://github.com/canisminor1990/bilibili-client',
    },
    {
      cover: '/img/coding-screeps.png',
      title: 'screeps-dashboard',
      desc: '👀 Dashboard for Screeps',
      type: 'screeps',
      href: 'https://github.com/ScreepsAI/screeps-dashboard',
    },
    {
      cover: '/img/coding-ffxiv.png',
      title: 'ffxiv-cmskin',
      desc: '🌱 CanisMinor ActSkin - FFXIV',
      type: 'final fantasy xiv',
      href: 'https://github.com/canisminor1990/ffxiv-cmskin',
    },
  ],
  article: {},
};
