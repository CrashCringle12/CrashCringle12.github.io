import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Title from './Title';
import { fetchYouTubeVideos } from '../youtubeService';
import { useAppContext } from '../appContext';

// #region styled-components
const VideoWrapper = styled.div`
  margin-bottom: 20px;

  iframe {
    width: 100%;
    height: 315px;
  }
`;
// #endregion

// #region component
const Videos = () => {
  const { theme } = useAppContext();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchYouTubeVideos();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching YouTube videos', error);
      }
    };

    getVideos();
  }, []);

  return (
    <Element name={"Videos"} id="Videos">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Recent Videos"} />
          </Container>
          <Row className="mt-3 align-items-center">
            {videos.map((video) => (
              <Col xs={12} md={6} key={video.id.videoId} className="my-3">
                <VideoWrapper>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    allowFullScreen
                    title={video.snippet.title}
                  ></iframe>
                  <p>{video.snippet.title}</p>
                </VideoWrapper>
              </Col>
            ))}
          </Row>

        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Videos;
