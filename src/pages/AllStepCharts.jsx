import React from "react";
// Styles
import styled from "styled-components";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Icons
import { Icon } from "@iconify/react/dist/iconify.js";
import chartsData from "../data/charts.json"; // Adjust the path according to your directory structure
// Components
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import Loading from "../components/Loading";
import Title from "../components/Title";
import StyledCard from "../components/StyledCard";
import BackToTop from "../components/BackToTop";
// Utils
import { updateTitle } from "../utils";

// #region styled-components
const StyledSection = styled.section`
  .input-group {
    max-width: 90vw;
  }

  @media screen and (min-width: 800px) {
    .input-group {
      width: 75%;
    }
  }
`;
// #endregion

// #region component
const AllCharts = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [pageItems, setPageItems] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);
  const { data: userData } = useGetUsersQuery();
  const [data, setData] = React.useState(chartsData); // Use imported JSON data
  let content;

  React.useEffect(() => {
    updateTitle(`${userData.name} | ITG`);
  }, [userData]);

  React.useEffect(() => {
    const updateFilteredResults = () => {
      const currentData = searchInput
        ? data.filter((item) => {
            return (
              item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
              (item.subtitle && item.subtitle.toLowerCase().includes(searchInput.toLowerCase())) ||
              (item.pack && item.pack.toLowerCase().includes(searchInput.toLowerCase())) ||
              (item.description && item.description.toLowerCase().includes(searchInput.toLowerCase())) ||
              (item.artist && item.artist.toLowerCase().includes(searchInput.toLowerCase()))
            );
          })
        : data;

      const itemsPerPage = 6;
      const totalPages = Math.ceil(currentData.length / itemsPerPage);
      const startIdx = (activePage - 1) * itemsPerPage;
      const endIdx = startIdx + itemsPerPage;
      setFilteredResults(currentData.slice(startIdx, endIdx));

      const visiblePages = 25; // Number of visible page items
      const halfVisible = Math.floor(visiblePages / 2);

      const tempPageItems = [];
      let startPage, endPage;

      if (totalPages <= visiblePages) {
        startPage = 1;
        endPage = totalPages;
      } else {
        if (activePage <= halfVisible) {
          startPage = 1;
          endPage = visiblePages;
        } else if (activePage + halfVisible >= totalPages) {
          startPage = totalPages - visiblePages + 1;
          endPage = totalPages;
        } else {
          startPage = activePage - halfVisible;
          endPage = activePage + halfVisible;
        }
      }

      for (let number = startPage; number <= endPage; number++) {
        tempPageItems.push(
          <Pagination.Item
            key={number}
            active={number === activePage}
            onClick={() => setActivePage(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
      setPageItems(tempPageItems);
    };

    updateFilteredResults();
  }, [searchInput, data, activePage]);

  React.useEffect(() => {
    setActivePage(1);
  }, [searchInput]);

  if (!data.length) {
    content = (
      <>
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"All Charts"} />
        </Container>
        <Container className="d-flex flex-column justify-content-center">
          <Loading />
        </Container>
      </>
    );
  } else {
    content = (
      <>
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Search Cringle Charts"} />
        </Container>
        <Container>
          <InputGroup className="mx-auto mb-3">
            <InputGroup.Text id="search">
              <Icon icon="ic:round-search" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search by name, subtitle, artist, or pack"
              aria-label="Search charts"
              aria-describedby="search"
              onChange={(e) => setSearchInput(e.currentTarget.value)}
            />
          </InputGroup>
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center row">
            {filteredResults.map(function ({
              id,
              image,
              name,
              subtitle,
              description,
              artist,
              pack,
              html_url,
              video_url,
            }) {
              return (
                <Col key={id}>
                  <StyledCard
                    image={image}
                    name={name}
                    subtitle={subtitle}
                    description={description}
                    artist={artist}
                    pack={pack}
                    url={html_url}
                    video={video_url}
                  />
                </Col>
              );
            })}
          </Row>
          <Container className="d-flex justify-content-center mt-5">
            <Pagination>
              <Pagination.Prev
                onClick={() =>
                  activePage === 1
                    ? setActivePage(pageItems.length)
                    : setActivePage(activePage - 1)
                }
              />
              {pageItems}
              <Pagination.Next
                onClick={() =>
                  activePage === pageItems.length
                    ? setActivePage(1)
                    : setActivePage(activePage + 1)
                }
              />
            </Pagination>
          </Container>
        </Container>
      </>
    );
  }

  return (
    <>
      <main>
        
        <StyledSection className="d-flex flex-column justify-content-center">
          {content}
        </StyledSection>
      </main>
      <BackToTop home={"Home"} />
    </>
  );
};
// #endregion

export default AllCharts;
