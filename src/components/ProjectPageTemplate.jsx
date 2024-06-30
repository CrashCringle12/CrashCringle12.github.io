import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown';
import { Element } from "react-scroll";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Title from "./Title";

// #region styled-components
const StyledProjectPage = styled.section`
    margin-bottom: -5%;
  .banner {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .description {
    font-size: 1.2rem;
    text-align: justify;
    margin-top: 10px;
  }
  .info {
    font-size: 1rem;
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
    margin-top: 20px;
    text-align: center;
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
  description: PropTypes.string
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
  description
}) => {
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
              <p className="info">
                <span>Status:</span> {status}
              </p>
              <p className="description"> {description || `This is a description of the ${title} project. Write your paragraph or so description here. You can add more text to give a detailed overview of the project or any other relevant information that you want to share`}
              </p>
              {bio && <p className="description"> <ReactMarkdown>{bio}</ReactMarkdown></p>}
              {moreInfo && <p className="description"><ReactMarkdown>{moreInfo}</ReactMarkdown></p>}
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
              <div className="button-container">
                <Button variant="primary" href="/path/to/download">
                  Download Pack
                </Button>
              </div>
              <div className="button-container">
                <Link to="/spoiler">
                  <Button variant="secondary">Spoiler Page</Button>
                </Link>
              </div>
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
