import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Title from "./Title";

// #region styled-components
const StyledProjectPage = styled.section`
  .banner {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .description {
    font-size: 1.2rem;
    text-align: justify;
    margin-top: 20px;
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
  bannerImage: PropTypes.string.isRequired,
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
};

const ProjectPageTemplate = ({
  title,
  bannerImage,
  bio,
  moreInfo,
  date,
  status,
  songs,
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
              <img
                src={`${process.env.PUBLIC_URL}/${bannerImage}`}
                alt={`${title} Banner`}
                className="banner"
              />
              <p className="info">
                <span>Date:</span> {date}
              </p>
              <p className="info">
                <span>Status:</span> {status}
              </p>
              <p className="description">
                This is a description of the {title} project. Write your
                paragraph or so description here. You can add more text to give
                a detailed overview of the project or any other relevant
                information that you want to share.
              </p>
              {bio && <p className="description">{bio}</p>}
              {moreInfo && <p className="description">{moreInfo}</p>}
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
