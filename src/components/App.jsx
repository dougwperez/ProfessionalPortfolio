import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

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
            <li
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
            </li>
            <li>
              <button
                class="cta-btn cta-btn--hero"
                onClick={(event) => window.open('https://dougwperez.github.io/Doug-Perez-Resume/')}
              >
                Resume
              </button>
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
