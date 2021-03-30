import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import GithubButtons from './GithubButtons/GithubButtons';
import { useWindowSize, useWindowWidth, useWindowHeight } from '@react-hook/window-size';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [width, height] = useWindowSize();
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <div>
      <header className="navbar-fixed-top cbp-af-header" className="sticky-header-glass">
        <nav>
          <ul className="sticky-menu-options">
            <li className="fullTitle">
              <span className="siteTitle">{' Doug Perez : '}</span>
              <span className="JobTitleinTitle">{'Front End Developer'}</span>
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
                href={'https://www.linkedin.com/in/doug-perez/'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className={`fa fa-${'linkedin1 fa-2x'} fa-inverse`} />
              </a>
            </li>
            {width < 600 ? null : (
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
            )}

            <li>
              <button
                onClick={(event) => window.open('https://dougwperez.github.io/Doug-Perez-Resume/')}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume1"
                // href={resume}
              >
                {width < 600 ? 'Resume' : 'Download Resume'}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    </div>
  );
}

export default App;
