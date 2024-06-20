import React, { useState, useEffect } from "react";
// Styles
import styled from "styled-components";
// State
import { useAppContext } from "../appContext";
// Router
import { Link } from "react-router-dom";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";
import Title from "./Title";
import StepChartCard from "./StepChartCard";
// Import the JSON file
import chartsData from "../data/charts.json"; // Adjust the path according to your directory structure

// #region component
const StepCharts = () => {
  const { theme } = useAppContext();
  const [stepcharts, setStepCharts] = useState([]);
  const [mainStepCharts, setMainStepCharts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      // Load stepcharts data from charts.json
      const data = chartsData;
      setStepCharts(data);

      // Shuffle the data and select random 6 charts
      const shuffledStepCharts = data.sort(() => 0.5 - Math.random());
      const randomStepCharts = shuffledStepCharts.slice(0, 6);
      setMainStepCharts(randomStepCharts);

      setIsLoading(false);
    } catch (error) {
      console.error("Error loading stepcharts data:", error);
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <Container className="d-flex">
        <Loading />
      </Container>
    );
  } else if (isError) {
    content = (
      <Container className="d-flex align-items-center justify-content-center">
        <h2>Error loading stepcharts data</h2>
      </Container>
    );
  } else {
    content = (
      <>
        {!isError && stepcharts.length === 0 && (
          <h2 className="text-center">
            Oops, you do not have any stepcharts yet...
          </h2>
        )}
        {mainStepCharts.length !== 0 && (
          <>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
              {mainStepCharts.map((element) => {
                return (
                  <Col key={element.id}>
                    <StepChartCard
                      image={element.image}
                      name={element.name}
                      subtitle={element.subtitle}
                      description={element.description}
                      pack={element.pack}
                      url={element.html_url}
                      video={element.video_url}
                    />
                  </Col>
                );
              })}
            </Row>
            {stepcharts.length > 6 && (
              <Container className="text-center mt-5">
                <Link to="/All-StepCharts">
                  <Button
                    size="lg"
                    variant={
                      theme === "light" ? "outline-dark" : "outline-light"
                    }
                  >
                    Search All <Icon icon="fa-solid:magnifying-glass" /> StepCharts
                  </Button>
                </Link>
              </Container>
            )}
          </>
        )}
      </>
    );
  }

  return (
    <Element name={"StepCharts"} id="stepcharts">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Random Charts"} />
          </Container>
          {content}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default StepCharts;
