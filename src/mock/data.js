import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Doug Perez | Full Stack Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio website for React Developer Doug Perez', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Full Stack Engineer',
  name: 'Doug Perez,',
  subtitle: 'An SF-based React Developer.',
  cta: '',
};

// ABOUT DATA
//NOTE ACTUAL TEXT IS IN ABOUT SECTION
export const aboutData = {
  img: 'profileXL1.jpg',
  paragraphOne:
    'I first started coding Front End applications while quarantining in Wuhan in December 2019, during the first Covid-19 outbreak. During this tense time, I built ESL MiniGames, a suite of engaging, educational games in JavaScript. It was a resounding success that allowed for a more interactive experience over Zoom. From there, my passion for Front End development only grew.',
  paragraphTwo:
    'Front End: JavaScript ES6, HTML5, React.js, Redux, React Native, Gatsby, jQuery, Styled Components, Sass.',
  paragraphThree:
    'Back End: Node.js, Express, Nginx, GraphQL, MongoDB, PostgreSQL, MySQL, SQLite, REST API, Redis.',
  paragraphFour:
    'DevOps & Testing: AWS EC2, Netlify, Docker, Heroku, Git, Axios, Babel, Webpack, Jest, Enzyme, Mocha, Chai, Loader.io, K6.',
  resume: 'https://dougwperez.github.io/Doug-Perez-Resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'MyBuyTech Store',
    info:
      'A custom made e-commerce site that uses a MERN stack framework. The e-store features high end consumer electonics, PayPal and Visa/Mastercard integration, and user authentication. Users can customize their accounts, make purchases, and leave product reviews. Site architecture relies heavily on Redux.',
    info2: '',
    url: 'https://mybuytech.herokuapp.com/',
    repo: 'https://github.com/dougwperez/E-Mai-ecommerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.png',
    title: 'JS Unscramble',
    info:
      'A MERN stack web app that gamifies the process of learning JS fundamentals, inspired by Duolingo. Users are presented with a random JavaScript toy problem, with a scrambled solution. The objective is to unscramble the solution.',
    info2: '',
    url: 'https://serene-garden-81705.herokuapp.com/#',
    repo: 'https://github.com/dougwperez/UnscrambleJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'ZenRent: Reviews',
    info:
      'Built a MERN stack web application for peer-to-peer home sharing. My focus was the reviews microservice. Utilized Reacted Styled Components in combination with extensive use of Flexbox to achieve superior consistency across multiple platforms.',
    info2:
      'Additionally I was the Project Manager for ZenRent. Kept the team focused, on schedule and motivated.',
    url: 'https://www.youtube.com/watch?v=PdbfBXb6QXw',
    repo: 'https://github.com/ZenRent/Reviews', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'ESL MiniGames',
    info:
      'Developed for Wuhan students during the 2019 Outbreak of Covid-19, ESL MiniGames features six different Vanilla JS and JQuery games that allowed my students to practice various English concepts.',
    info2: '',
    url: 'https://dougwperez.github.io/ESL-MiniGames/',
    repo: 'https://github.com/dougwperez/ESL-MiniGames', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Alex4Hope Memorial',
    info:
      'Built with a dual purpose in mind, Alex4Hope is meant to serve as both a Memorial as well as platform for the organization, which is committed to raising awareness about fentanyl and other illicit substances.',
    info2: '',
    url: 'https://dougwperez.github.io/Movahedi-memorial/',
    repo: 'https://github.com/dougwperez/Movahedi-memorial', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'BrightStack.io',
    info:
      'The purpose of this project was to optimize a legacy codebase. The results were as follows: 1. Optimized performance while scaling up the database by a factor of 10,000. 2. Improved load speeds from 338.72 ms to 3.28 ms and maintained an error rate of 8%. Performance gains attributed to horizontal scaling, using Nginx as a load balancer and sending requests to an array of EC2 servers.',
    info2: 'Technologies: PostgreSQL, Node.JS, Jest, Enzyme, Docker, AWS (EC2), React',
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
