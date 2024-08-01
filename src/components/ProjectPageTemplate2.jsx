import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown';
import { Element } from "react-scroll";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Title from "./Title";

// #region styled-components
const StyledProjectPage = styled.section`
  margin-bottom: -12%;
  .banner {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .description {
    font-size: 1.3rem;
    text-align: justify;
    margin-top: 10px;
  }
  .info {
    font-size: 1.9rem;
    margin-top: 20px;
  }
  .info span {
    font-weight: bold;
  }
  .table-container {
    margin-top: 20px;
    max-height: 300px; /* Set the maximum height for the table container */
    overflow-y: auto; /* Enable vertical scrolling */
  }
  .button-container {
    margin-top: 10px;
    text-align: center;
  }
  .spoiler-container {
    margin-top: 20px;
    max-height: 200px; /* Set the maximum height for the spoiler container */
    overflow-y: auto; /* Enable vertical scrolling */
    border: 1px solid ${({ theme }) => theme.color};
    padding: 10px;
    white-space: pre-wrap; /* Maintain white spaces and new lines */
    display: none; /* Hidden by default */
  }
  .spoiler-container.visible {
    display: block; /* Show when visible */
  }
`;
// #endregion

// #region component
const propTypes = {
  title: PropTypes.string.isRequired,
  bannerImage: PropTypes.string,
  bannerVideo: PropTypes.string, // Add bannerVideo as a prop
  bio: PropTypes.string,
  moreInfo: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string,
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      difficulties: PropTypes.string.isRequired,
    })
  ).isRequired,
  description: PropTypes.string,
  downloadLink: PropTypes.string, // Add downloadLink as a prop
  spoilerFile: PropTypes.string, // Add spoilerFile as a prop
};

const ProjectPageTemplate = ({
  title,
  bannerImage,
  bannerVideo,
  bio,
  moreInfo,
  date,
  status,
  songs,
  description,
  downloadLink,
  spoilerFile,
}) => {
  const [spoilerContent, setSpoilerContent] = useState("");
  const [isSpoilerVisible, setIsSpoilerVisible] = useState(false);

  useEffect(() => {
    if (spoilerFile) {
      fetch(`${process.env.PUBLIC_URL}/spoilers/${spoilerFile}`)
        .then((response) => response.text())
        .then((text) => setSpoilerContent(text))
        .catch((error) => console.error("Error fetching spoiler file:", error));
    }
  }, [spoilerFile]);

  const toggleSpoilerVisibility = () => {
    setIsSpoilerVisible(!isSpoilerVisible);
  };

  return (
    <Element name={title} id={title.replace("Cringle ", "")}>
      <StyledProjectPage className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={title} />
          </Container>
          <Row className="align-items-start mt-5">
            <Col md={6}>
              {bannerVideo ? (
                <video className="banner" autoPlay loop muted>
                  <source src={`${process.env.PUBLIC_URL}/${bannerVideo}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/${bannerImage}`}
                  alt={`${title} Banner`}
                  className="banner"
                />
              )}
              <p className="info">
                <span>Date:</span> {date}
              </p>
              <p className="description"> {description || `This is a description of the ${title} project. Write your paragraph or so description here. You can add more text to give a detailed overview of the project or any other relevant information that you want to share`}
              </p>
              {bio && <ReactMarkdown className="description">{bio}</ReactMarkdown>}
              {moreInfo && <ReactMarkdown className="description">{moreInfo}</ReactMarkdown>}
            </Col>
            <Col md={6} className="d-flex flex-column">
              <h3 className="align-self-start">Songs in this Pack</h3>
              <div className="table-container w-100">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Artist</th>
                      <th>Difficulties</th>
                    </tr>
                  </thead>
                  <tbody>
                    {songs.map((song, index) => (
                      <tr key={song.id}>
                        <td>{index + 1}</td>
                        <td>{song.name}</td>
                        <td>{song.artist}</td>
                        <td>{song.difficulties}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              {downloadLink && (
                <div className="button-container">
                  <Button variant="primary" href={downloadLink}>
                    Download Pack
                  </Button>
                </div>
              )}
              {spoilerContent && (
                <>
                  <div className="button-container">
                    <Button variant="secondary" onClick={toggleSpoilerVisibility}>
                      {isSpoilerVisible ? "Hide Spoiler" : "Show Spoiler"}
                    </Button>
                  </div>
                  <div className={`spoiler-container ${isSpoilerVisible ? 'visible' : ''}`}>
                    <pre>{spoilerContent}</pre>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </StyledProjectPage>
    </Element>
  );
};

ProjectPageTemplate.propTypes = propTypes;
// #endregion

export default ProjectPageTemplate;
