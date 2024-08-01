import React, { useState } from "react";
// Styles
import styled from "styled-components";
// Router
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// Icons
import { Icon } from "@iconify/react";
// Images
import GH from "../images/GH.svg";
// Components
import { Card } from "react-bootstrap";

// #region styled-components
const StyledCardComponent = styled.div`
  .card {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: ${({ theme }) => theme.color};
        color: var(--primary);

        .card-link {
          color: var(--primary);
        }
      }

      .card-link {
        text-decoration: none;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.color};
      }
    }
  }

  .card-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 5px; /* Larger space after subtitle */
  }

  .pack-name {
    font-size: 1rem;
    color: ${({ theme }) => theme.secondary};
    margin-top: 10px;
    margin-bottom: 2px; /* Larger space after subtitle */
  }
  .subtitle {
    font-size: 1.1rem; /* Smaller than title */
    color: ${({ theme }) => theme.color};
    margin-bottom: 5px; /* Larger space after subtitle */
  }
  .artist {
    font-size: 0.9rem; /* Small text */
    color: ${({ theme }) => theme.secondary};
    font-style: italic;
    margin-bottom: 20px; /* Larger space after artist */
  }
  .view-vid {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.secondary};
    margin-top: 10px;
    text-decoration: none; // Remove underline
    &:link,
    &:visited {
      color: ${({ theme }) => theme.color}; // Ensure the link color is white
    }

    &:hover,
    &:active {
      color: var(--primary); // Change color on hover/active
    }
  }
`;
// #endregion

// #region component
const StyledCard = ({ image, name, subtitle, artist, description, url, video, pack }) => {
  const imagePath = image ? `${process.env.PUBLIC_URL}/images/charts/${image}` : GH; // Use absolute path
  const [imgSrc, setImgSrc] = useState(imagePath);
  const [retry, setRetry] = useState(0);
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate(`/Packs?scrollTo=${pack.replace("Cringle ", "")}`);
  };

  const handleImageError = () => {
    if (retry < 3) {
      console.log(`Retrying image for ${name}: attempt ${retry + 1}`);
      // On the last try
      setRetry(retry + 1);      
      if (retry === 2) {
          // On the 5th try, try getting the image from github like: https://github.com/CrashCringle12/CrashCringle12.github.io/blob/gh-pages/images/othercharts/_common_menu_music__loop_.png?raw=true
            setImgSrc("https://github.com/CrashCringle12/CrashCringle12.github.io/blob/gh-pages/images/charts/" + image + "?raw=true");
          // Log that we are trying to get the image from github
          console.log(`Trying to get image from github for ${name}`);
      } else {
        setImgSrc(imagePath + `?retry=${retry + 1}`); // Add a query param to force reload
      }
    } else {
      setImgSrc(GH);
    }
  };

  // Debugging: Log the image path to the console
  console.log(`Loading image for ${name}: ${imagePath}`);

  return (
    <StyledCardComponent>
      <Card>
      <Card.Img
          variant="top"
          src={imgSrc} // Use the full path to the image
          alt={subtitle}
          className="mx-auto"
          onError={handleImageError}
        />
        <Card.Body className="overflow-auto text-center">
          <Card.Title className="card-title">{name}</Card.Title>
          {subtitle && <Card.Text className="subtitle">{subtitle}</Card.Text>}
          {artist && <Card.Text className="artist">By: {artist}</Card.Text>}
          {pack && <Card.Text className="pack-name">Pack: {pack}</Card.Text>}
          {video !== "" && video !== null ? (
            <Card.Link className="view-vid" href={video}>
              {"Watch Video "}
              <Icon icon="fa-brands:youtube" />
            </Card.Link>
          ) : null}
        </Card.Body>
        <Card.Footer className="text-center" onClick={handleDownloadClick}>
          <span className="card-link">
            {"Download Pack "}
            <Icon icon="fa-solid:download" />
          </span>
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
};
// #endregion

export default StyledCard;
