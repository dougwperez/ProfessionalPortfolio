import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import TechStackCubes from './TechStackCubes.jsx';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
  const [src, setSrc] = useState('https://dougwperez.github.io/Tech-Stack-Cubes/');

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div className="Container">
      <section id="hero" className="jumbotron">
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              <br />
              <br />
              {title || 'Hi, my name is'} <span className="text-color-main">{'Doug Perez,'}</span>
              <br />
              {subtitle || 'An SF-based React Developer.'}
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link className="learnMore test test2" to="about" smooth duration={1000}>
                  {cta || 'Learn more'}
                </Link>
              </span>
            </p>
          </Fade>
        </Container>
        {/* <iframe
          width="360"
          height="315"
          src="https://dougwperez.github.io/Tech-Stack-Cubes/"
          frameborder="0"
          allowfullscreen
        ></iframe> */}
      </section>
      {/* <div className="blendiframe">
        <TechStackCubes
          source={src}
          className="responsive-iframe"
          width="100%"
          style="border:none"
        />
      </div> */}
      <br />

      <iframe
        width="100%"
        height="515"
//  OLD CUBES
//         src="https://dougwperez.github.io/Tech-Stack-Cubes/"
//  NEW CUBES
        src="https://dougwperez.github.io/Tech-Stack-Cubes-2.0/"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Header;
