import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'} <span className="text-color-main">{'Doug Perez,'}</span>
            <br />
            {subtitle || 'An SF-based React Developer.'}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link className="learnMore" to="about" smooth duration={1000}>
                {cta || 'Learn more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>

      {/* <div class="contents">
        <div id="cube">
          <div class="front">
            <img
              src="https://www.pngkit.com/png/detail/377-3771972_sass.png"
              title="html"
              height="100%"
              width="100%"
            />
          </div>
          <div class="back">
            <img
              src="https://miro.medium.com/max/285/1*QR2SBNwG75LyY5uwqWpN3A.png"
              title="jquery"
              height="100%"
              width="100%"
            />
          </div>
          <div class="right">
            <img
              src="https://jquery-plugins.net/image/plugin/gatsby-blazing-fast-modern-site-generator-for-react.png"
              alt="gatsby"
              height="100%"
              width="100%"
            />
          </div>
          <div class="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
              title="redux"
              width="100%"
            />
          </div>
          <div class="top">
            <img
              src="https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg"
              width="100%"
              height="100%"
            />{' '}
          </div>
          <div class="bottom">
            <img
              src="https://www.kindpng.com/picc/m/78-788134_javascript-logo-hd-png-download.png"
              alt="js"
              border="0"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Header;
