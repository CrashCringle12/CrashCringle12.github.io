import React from "react";
// Styles
import styled from "styled-components";
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

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }
  }
`;
// #endregion

// #region component
const StyledCard = ({ image, name, subtitle, description, url, video, pack }) => {
  const imagePath = image ? `${process.env.PUBLIC_URL}/images/charts/${image}` : GH; // Use absolute path

  // Debugging: Log the image path to the console
  console.log(`Loading image for ${name}: ${imagePath}`);

  return (
    <StyledCardComponent>
      <Card>
        <Card.Img
          variant="top"
          src={imagePath} // Use the full path to the image
          alt={subtitle}
          className="mx-auto"
          onError={(e) => {
            console.error(`Failed to load image for ${name}: ${imagePath}`);
            e.target.src = GH; // Fallback to default image
          }}
        />
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name} - {subtitle}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {pack && <Card.Text className="text-muted">{pack}</Card.Text>}
          {video !== "" && video !== null ? (
            <Card.Link href={video}>
              {"View Video "}
              <Icon icon="icon-park-outline:code-computer" />
            </Card.Link>
          ) : null}
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={url}>
            {"Download Pack "}
            <Icon icon="icomoon-free:github" />
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
};
// #endregion

export default StyledCard;
