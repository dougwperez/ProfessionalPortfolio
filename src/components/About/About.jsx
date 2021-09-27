import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
// import profile from './profile.jpg';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Doug" />
        <br />

        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <br />
                <p className="about-wrapper__info-text">
                  <p>
                    <b className="tech-title">TECHNOLOGIES</b>
                  </p>
                  <div className="tech-list">
                    <strong>
                      <p>
                        <strong>Front End:</strong> React, React Native, Redux, MobX, Gatsby, TypeScript, HTML5, jQuery, Styled Components, Less, Sass.
                      </p>

                      <p>
                        <strong>Back End:</strong> Node.js, Express, Nginx, GraphQL, MongoDB,
                        PostgreSQL, MySQL, SQLite, REST API, Redis.
                      </p>
                      <p>
                        <strong>DevOps & Testing:</strong> AWS EC2, Netlify, Docker, Heroku, Git,
                        Axios, Babel, Webpack, Jest, Enzyme, Mocha, Chai, Loader.io, K6.
                      </p>
                    </strong>
                  </div>
                </p>

                {/* <p className="about-wrapper__info-text">{paragraphFour}</p> */}
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      View Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
