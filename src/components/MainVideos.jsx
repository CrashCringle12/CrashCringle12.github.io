import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Col, Container, Row } from 'react-bootstrap';
import Title from './Title';
import { fetchYouTubeVideos } from '../youtubeService';
import { useAppContext } from '../appContext';
import { Icon } from "@iconify/react";

// #region styled-components
const VideoWrapper = styled.div`
  margin-bottom: 20px;

  iframe {
    width: 100%;
    height: 315px;
  }
`;

const EmbeddedVideoWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;

  iframe {
    width: 100%;
    height: 315px; /* Match the height of YouTube videos */
    border: none;
  }
`;

const DriveWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;

  iframe {
    width: 100%;
    height: 315px;
    border: none;
  }

  @media (min-width: 1280px) {
    iframe {
      width: 640px;
      height: 480px;
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .icon {
    font-size: 1.5rem;
  }
`;

const LinkText = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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
          <HeaderWrapper>
            <Icon icon="mdi:video" className="icon" />
            <Title size={"h2"} text={"Tournament Videos"} />
          </HeaderWrapper>
          <Row className="mt-3 align-items-center">
            <Col xs={12} md={6} className="my-3">
              <EmbeddedVideoWrapper>
              <embed src="https://pennstateoffice365-my.sharepoint.com/:v:/g/personal/lbc5186_psu_edu/Ebay-c01lNxAjQRHh_pzOVYBcrF9hiMAor8T1vyDgU26XQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=kBDg9L"></embed>
                <iframe
                  src="https://pennstateoffice365-my.sharepoint.com/personal/lbc5186_psu_edu/_layouts/15/embed.aspx?UniqueId=b4087918-7334-4a1d-ae35-2663aded9e02&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                  allowFullScreen
                  title="RIGHTS2Day1.mp4"
                ></iframe>
              </EmbeddedVideoWrapper>
            </Col>
            <Col xs={12} md={6} className="my-3">
              <EmbeddedVideoWrapper>
                <iframe
                  src="https://pennstateoffice365-my.sharepoint.com/personal/lbc5186_psu_edu/_layouts/15/embed.aspx?UniqueId=cdf9b2b6-9435-40dc-8d04-4787fa733956&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                  allowFullScreen
                  title="Rights2Day2.mp4"
                ></iframe>
              </EmbeddedVideoWrapper>
            </Col>
            <Col xs={12} md={6} key="YUVbrbaUzGQ" className="my-3">
                <VideoWrapper>
                  <iframe
                    src={`https://www.youtube.com/embed/YUVbrbaUzGQ`}
                    frameBorder="0"
                    allowFullScreen
                    title="R.I.G.H.T.S 1 Tournament Stream | Day 1"
                  ></iframe>
                  <p>R.I.G.H.T.S 1 - Day 1</p>
                </VideoWrapper>
            </Col>
            <Col xs={12} md={6} key="BUOeWMeH_nI" className="my-3">
                <VideoWrapper>
                  <iframe
                    src={`https://www.youtube.com/embed/BUOeWMeH_nI`}
                    frameBorder="0"
                    allowFullScreen
                    title="R.I.G.H.T.S 1 Tournament Stream | Day 2"
                  ></iframe>
                  <p>R.I.G.H.T.S 1 - Day 2</p>
                </VideoWrapper>
            </Col>
          </Row>
          <HeaderWrapper>
            <Icon icon="mdi:video" className="icon" />
            <Title size={"h2"} text={"Black History Month Stream"} />
          </HeaderWrapper>
          <Row className="mt-3 align-items-center">
            <Col >
              <DriveWrapper>
                <iframe
                  src="https://drive.google.com/file/d/1tWoLVvPRubdQVyuMUijH6Blf0pR3luY2/preview"
                  allow="autoplay"
                  title="Black History Month Stream"
                ></iframe>
                <p>
                  For more content, check out the <LinkText href="https://drive.google.com/drive/folders/1sYLRUs9H3Kv9MXM01Xt6ADOCeeTgZG3r?usp=drive_link">Bloopers</LinkText>.
                </p>
              </DriveWrapper>
            </Col>
          </Row>
          <HeaderWrapper>
            <Icon icon="fa-brands:youtube" className="icon" />
            <Title size={"h2"} text={"Recent YouTube Videos"} />
          </HeaderWrapper>
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
