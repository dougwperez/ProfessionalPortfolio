import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Profile from './profileXL.jpg';
import { useWindowSize, useWindowWidth, useWindowHeight } from '@react-hook/window-size';

const AboutImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const [width, height] = useWindowSize();
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      // if (!image) return null;

      // const imageFixed = image.node.childImageSharp.fixed;
      // return <Img className="rounded shadow-lg" alt={alt} fixed={Profile} />;

      if ((filename === 'profileXL1.jpg' && width > 980) || width < 752) {
        return (
          <imgContainer>
            <img
              className="animated-gif"
              src={Profile}
              alt="JS Unscramble live demo"
              className="rounded shadow-lg"
              width="400"
            />
          </imgContainer>
        );
      }
      if (filename === 'profileXL1.jpg' && width < 980 && width > 752) {
        return (
          <imgContainer>
            <img
              className="animated-gif"
              src={Profile}
              alt="JS Unscramble live demo"
              className="rounded shadow-lg"
              width="350"
            />
          </imgContainer>
        );
      }
    }}
  />
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
