import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Images
import GH from "../images/GH.svg";
// Components
import { Card } from "react-bootstrap";

// #region styled-components
const StyledCard = styled.div`
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
const propTypes = {
  video: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string, // Changed to string for URL or path
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  pack: PropTypes.string,
  url: PropTypes.string.isRequired,
};

const StepChartCard = ({ video, description, image, name, subtitle, pack, url }) => {
  const imagePath = image ? `${process.env.PUBLIC_URL}/images/charts/${image}` : GH; // Use absolute path
  return (
    <StyledCard>
      <Card>
        <Card.Img
          variant="top"
          src={imagePath} // Use the full path to the image
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name} - {subtitle}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {pack && <Card.Text className="text-muted">Pack: {pack}</Card.Text>}
          {video ? (
            <Card.Link href={video}>
              {"Watch Video "}
              <Icon icon="fa-brands:youtube" />
            </Card.Link>
          ) : null}
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={url}>
            {"Download Pack "}
            <Icon icon="fa-solid:download" />
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCard>
  );
};

StepChartCard.propTypes = propTypes;
// #endregion

export default StepChartCard;
