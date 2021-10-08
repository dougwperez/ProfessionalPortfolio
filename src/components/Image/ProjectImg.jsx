import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import project0Gif from './project0hdupdate.gif';
import project1Gif from './project1hd.gif';
import project2Gif from './project2hd.gif';
import project3Gif from './project3hd.gif';
import project4Gif from './project4hdupdate.mp4';
import { useWindowSize, useWindowWidth, useWindowHeight } from '@react-hook/window-size';

const ProjectImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1366) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const [width, height] = useWindowSize();
      const onlyWidth = useWindowWidth();
      const onlyHeight = useWindowHeight();

      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return <Img alt={alt} />;

      const imageFluid = image.node.childImageSharp.fluid;
      console.log('width', width);

      if (filename === 'project0.jpeg' && width < 740) {
        return (
          <imgContainer>
            <Img alt={alt} fluid={imageFluid} />
          </imgContainer>
        );
      }

      if (filename === 'project0.jpeg' && width > 740) {
        return (
          <imgContainer>
            <img
              className="animated-gif"
              src={project0Gif}
              alt="JS Unscramble live demo"
              fluid={imageFluid}
            />
          </imgContainer>
        );
      }

      if (filename === 'project.png' && width < 740) {
        return (
          <imgContainer>
            <Img alt={alt} fluid={imageFluid} />
          </imgContainer>
        );
      }

      if (filename === 'project.png' && width > 740) {
        return (
          <imgContainer>
            <img
              className="animated-gif"
              src={project1Gif}
              alt="JS Unscramble live demo"
              fluid={imageFluid}
            />
          </imgContainer>
        );
      }

      if (filename === 'project1.png' && width < 740) {
        return (
          <imgContainer>
            <Img alt={alt} fluid={imageFluid} />
          </imgContainer>
        );
      }

      if (filename === 'project1.png' && width > 740) {
        return (
          <imgContainer>
            <img
              className="animated-gif"
              src={project2Gif}
              alt="JS Unscramble live demo"
              fluid={imageFluid}
            />
          </imgContainer>
        );
      }

      if (filename === 'project2.png' && width > 740) {
        return (
          <imgContainer>
            <img
              className="animated-gif"
              src={project3Gif}
              alt="JS Unscramble live demo"
              fluid={imageFluid}
            />
          </imgContainer>
        );
      }
      if (filename === 'project2.png' && width < 740) {
        return (
          <imgContainer>
            <Img alt={alt} fluid={imageFluid} />
          </imgContainer>
        );
      }

      if (filename === 'project3.png' && width < 740) {
        return (
          <imgContainer>
            <Img alt={alt} fluid={imageFluid} />
          </imgContainer>
        );
      }

      if (filename === 'project3.png' && width > 740) {
        return (
          <imgContainer>
            <img
              className="animated-gif"
              src={project4Gif}
              alt="JS Unscramble live demo"
              fluid={imageFluid}
            />
          </imgContainer>
        );
      } else {
        return (
          <imgContainer>
            <Img alt={alt} fluid={imageFluid} />
          </imgContainer>
        );
      }
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
