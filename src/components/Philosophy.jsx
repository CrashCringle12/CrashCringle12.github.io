import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
const philosophyContent = `
  <p>
    My motivation for playing ITG has always been for fun. I don't like to align myself with any particular group, playstyle or box, I just do whatever I personally enjoy. I find enjoyment in Stamina, Mods, Tech, DDR, freestyle...doubles..singles. There's enjoyment to be found in all ways of enjoying the game. Despite their differences, I believe that the various popular styles of enjoying dance games are all completely valid.
    <br /><br />
    I find that here's a large focus on tech presently and ig sometimes it kinda feels like that's all there is nowadays. Sometimes it feels like that anything else is a deviation from ITG and not the status quo.
    <br />
    I don't really subscribe to that, and hope that all players can find something they enjoy here. Just have fun and play how ya wanna play.
    <br /><br />
    There's a good amount of diversity in the charts. There's some mod heavy charts, stamina heavy, meme heavy, freestyle heavy, tech heavy, etc etc. Just really depends on what you pick I suppose. I have no intentions of fitting my charts to a specific meta or rhetoric. 
    <br /><br />
    There is no overall charting theme to any of these packs with the exception of Cringle Desolation. The reason a chart is in one pack and not the other is because of...well \"color\". Each song kinda screams a certain color or vibe to me and that plays a part in what pack I put it in. That kind of implies these packs are living sorta? Kinda...Once a pack hits 20 songs it's very unlikely I add anything to it or if a significant amount of time has passed since I created it. Idk I'm weird.
    <br /> If you encounter any issues or find a mistake you think I made please feel free to reach out to me on discord. I am very very far from perfect so I'm sure something will come up.
    <br /><br /><br /><br /> tl;dr If VisualFX, memes, spins, wordle, surprise couples, or lack of canon-roundsteps upset you, uh you're gonna have a pretty bad time here. Check the Spoilers for context on the charts
    </p>
`;
// #region styled-components
const StyledPhilosophy = styled.section`
  .content-container {
    max-width: 1700px; /* Increase max width for more words per line */
    margin: 0 auto; /* Center the content */
    padding: 40px 20px; /* Add padding for better readability */
    font-family: 'Merriweather', serif; /* Use a different font */
    line-height: 2; /* Improve line spacing */
  }

  .text-content {
    margin-top: 20px;
    text-align: left; /* Keep text left aligned for better readability */
  }

  .img {
    width: 15rem; /* Adjusted the size for better balance */
    height: 15rem;
    margin: 20px 0;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

// #endregion

// #region component
const propTypes = {
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string,
};

const Philosophy = ({ avatar_url, bio }) => {
  return (
    <Element name={"Philosophy"} id="Philosophy">
      <StyledPhilosophy className="section">
        <Container className="content-container">
          <Row className="align-items-center mt-5">
          <Title size={"h2"} text={"Charting Philosophy"} className="text-center" />
            <Col md={4} className="text-center">
              <img
                src={avatar_url}
                alt="Avatar"
                loading="lazy"
                className="rounded-circle img"
              />
            </Col>
            <Col md={8} className="text-content">
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: philosophyContent }} // Inject the HTML content
              />
            </Col>
          </Row>
        </Container>
      </StyledPhilosophy>
    </Element>
  );
};

Philosophy.propTypes = propTypes;
// #endregion

export default Philosophy;