import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import GithubButtons from './GithubButtons/GithubButtons';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <header className="navbar-fixed-top cbp-af-header" className="sticky-header-glass">
        <nav>
          <ul className="sticky-menu-options">
            {/* <li
              class="cta-btn text-color-black"
              onClick={(event) => window.open('https://www.linkedin.com/in/doug-perez/')}
            >
              {' '}
              Linked In
            </li>
            <li
              class="cta-btn text-color-black"
              onClick={(event) => window.open('https://github.com/dougwperez')}
            >
              GitHub
            </li> */}
            {/* <li>
              <span className="d-flex mt-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume1"
                  // href={resume}
                >
                  View Resume
                </a>
              </span>
            </li> */}
            {/* <h2 className="StickyHeaderTitle"><em>Doug Perez: Software Engineer Portfolio</em></h2> */}

            <li className="fullTitle">
              <span className="siteTitle">{' Doug Perez: '}</span>
              <span className="JobTitleinTitle">{'Front End Developer'}</span>
            </li>

            <li>
              <a
                href={'mailto:perezcpt@gmail.com'}
                rel="noopener noreferrer"
                target="_blank"
                color="green"
              >
                <i className={`fa fa-${'envelope1 fa-2x'} fa-inverse`} />
              </a>
            </li>
            <li>
              <a
                href={'https://www.linkedin.com/in/doug-perez/'}
                rel="noopener noreferrer"
                target="_blank"
                color="green"
              >
                <i className={`fa fa-${'linkedin1 fa-2x'} fa-inverse`} />
              </a>
            </li>
            <li>
              <a
                href={'https://github.com/dougwperez'}
                rel="noopener noreferrer"
                target="_blank"
                color="green"
              >
                <i className={`fa fa-${'github1 fa-2x'} fa-inverse`} />
              </a>
            </li>
            <li>
              <a
                onClick={(event) => window.open('https://dougwperez.github.io/Doug-Perez-Resume/')}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume1"
                // href={resume}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
