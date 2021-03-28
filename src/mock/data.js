import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Doug Perez | Front End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Front End Engineer',
  name: 'Doug Perez,',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://dougwperez.github.io/Doug-Perez-Resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'JS Unscramble',
    info: 'Testing',
    info2: '',
    url: 'https://serene-garden-81705.herokuapp.com/#',
    repo: 'https://github.com/dougwperez/UnscrambleJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'ZenRent: Reviews',
    info: '',
    info2: '',
    url: 'https://www.youtube.com/watch?v=PdbfBXb6QXw',
    repo: 'https://github.com/ZenRent/Reviews', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'ESL MiniGames',
    info: '',
    info2: '',
    url: 'https://dougwperez.github.io/ESL-MiniGames/',
    repo: 'https://github.com/dougwperez/ESL-MiniGames', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Alex4Hope Organization',
    info: '',
    info2: '',
    url: 'https://dougwperez.github.io/Movahedi-memorial/',
    repo: 'https://github.com/dougwperez/Movahedi-memorial', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'BrightStack.io',
    info: '',
    info2: '',
    url: 'https://www.youtube.com/watch?v=YjxJDCq-xew&t=1s',
    repo: 'https://github.com/britestack/photo-gallery', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'perezcpt@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:perezcpt@gmail.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/doug-perez/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dougwperez',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
