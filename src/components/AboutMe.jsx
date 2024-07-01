import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import CringleImg from "../images/Yell.jpg";

// #region styled-components
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(1800deg);
    content: url(${CringleImg}); /* Swap image at the halfway point */
  }
  100% {
    transform: rotate(3600deg);
  }
`;

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .profile-img {
    width: 18rem;
    height: 18rem;
    animation: ${spin} 3s infinite;
  }
`;
// #endregion

// #region component
const propTypes = {
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  moreInfo: PropTypes.string,
};

const AboutMe = ({ avatar_url, bio, moreInfo }) => {
  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"About Me"} />
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                {bio && <p>{bio}</p>}
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle profile-img"
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
};

AboutMe.propTypes = propTypes;
// #endregion

export default AboutMe;
