import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact Doug" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Sounds Great!'}
            </p>
            <p className="contact-wrapper__text">{cta || 'perezcpt@gmail.com'}</p>
            <p className="contact-wrapper__text">{cta || '415-259-7430'}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={'https://calendly.com/perezcpt/30min'}
            >
              {btn || 'SCHEDULE A CALL'}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
