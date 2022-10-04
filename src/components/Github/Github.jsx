import React, { useContext, useEffect, useState } from 'react';
// import Fade from 'react-reveal/Fade';
// import Tilt from 'react-tilt';
// import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import GitHubCalendar from 'react-github-calendar';
// import ReactTooltip from 'react-tooltip';

const Github = () => {
  // const { projects } = useContext(PortfolioContext);

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
    <div>
      <section id="projects" id="Git">
        <div>
          <div className="project-wrapper" id="github-wrapper">
            <Title title="My Github" />
            <br />
            {/* <iframe src="https://gittrophy.com/?entity=dougwperez&year=2020"></iframe> */}
            {/* <div
              id="holder"
              style={{
                overflow: 'hidden',
                display: 'block',
                width: '850px',
                height: '-500px',
              }}
            >
              <iframe
                id="embed"
                src="https://gittrophy.com/?entity=dougwperez&year=2020"
                style={{
                  width: '850px',
                  height: '-500px',

                  marginTop: '-500px',
                  marginLeft: '-100px',
                }}
              ></iframe>
            </div> */}
//             <GitHubCalendar
//               id="contri"
//               username="dougwperez"
//               blockSize={15}
//               blockMargin={4}
//               fontSize={16}
//             >
              {/* <ReactTooltip delayShow={50} html /> */}
//             </GitHubCalendar>
            <br />
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              id="viewGithub"
              href="https://github.com/dougwperez"
            >
              View GitHub Profile
            </a>
            {/* <IframeResizer dfs
              log
              src="https://gittrophy.com/?entity=dougwperez&year=2020"
              style={{ width: '100px', minWidth: '600px', minHeight: '850px', marginTop: '500px' }}
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Github;
