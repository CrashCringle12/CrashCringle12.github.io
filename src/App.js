import React from "react";
// Styles
import { ThemeProvider } from "styled-components";
// State
import { useAppContext } from "./appContext";
import { useDispatch, useSelector } from "react-redux";
import {
  setProjects,
  setMainProjects,
  selectProjects,
} from "./app/projectsSlice";
import { useGetUsersQuery, useGetProjectsQuery } from "./app/apiSlice";
import PropTypes from "prop-types";
// Router
import { HashRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import AllStepCharts from "./pages/AllStepCharts";
import Packs from "./pages/Packs";
import NotFound from "./pages/NotFound";
// Components
import { ErrorBoundary } from "react-error-boundary";
import AppFallback from "./components/AppFallback";
import GlobalStyles from "./components/GlobalStyles";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// Config
import { navLogo } from "./config";

// #region constants
const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: "#45413C",
    background: "#F5F2E8",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};
// #endregion

// #region component
const propTypes = {
  filteredStepCharts: PropTypes.arrayOf(PropTypes.string),
  stepchartCardImages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.node.isRequired,
    })
  ),
};
const defaultProps = {
  filteredProjects: [],
  projectCardImages: [],
};

const App = ({ projectCardImages, filteredProjects }) => {
  const { theme, setTheme } = useAppContext();
  const projects = useSelector(selectProjects);
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, error } = useGetUsersQuery();
  const { data: projectsData } = useGetProjectsQuery();
  let content;

  // Set all projects state
  React.useEffect(() => {
    const tempData = [];
    if (projectsData !== undefined && projectsData.length !== 0) {
      projectsData.forEach((element) => {
        const tempObj = {
          id: null,
          homepage: null,
          description: null,
          image: null,
          name: null,
          html_url: null,
        };
        tempObj.id = element.id;
        tempObj.homepage = element.homepage;
        tempObj.description = element.description;
        tempObj.name = element.name;
        tempObj.html_url = element.html_url;
        tempData.push(tempObj);
      });
      if (
        projectCardImages !== (undefined && null) &&
        projectCardImages.length !== 0
      ) {
        projectCardImages.forEach((element) => {
          tempData.forEach((ele) => {
            if (element.name.toLowerCase() === ele.name.toLowerCase()) {
              ele.image = element.image;
            }
          });
        });
      }
      dispatch(setProjects(tempData));
    }
  }, [projectsData, projectCardImages, dispatch]);

  // Set main projects state
  React.useEffect(() => {
    if (projects.length !== 0) {
      if (
        filteredProjects !== (undefined && null) &&
        filteredProjects.length !== 0
      ) {
        const tempArray = projects.filter((obj) =>
          filteredProjects.includes(obj.name)
        );
        tempArray.length !== 0
          ? dispatch(setMainProjects([...tempArray]))
          : dispatch(setMainProjects([...projects.slice(0, 3)]));
      } else {
        dispatch(setMainProjects([...projects.slice(0, 3)]));
      }
    }
  }, [projects, filteredProjects, dispatch]);

  React.useEffect(() => {
    const updateTheme = () => (darkMode ? setTheme("dark") : setTheme("light"));
    updateTheme();
  }, [setTheme]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  if (isLoading) {
    content = (
      <Container className="d-flex vh-100 align-items-center">
        <Loading />
      </Container>
    );
  } else if (isSuccess) {
    content = (
      <>
        <Element name={"Home"} id="home">
          <NavBar Logo={navLogo} />
        </Element>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/All-StepCharts" element={<AllStepCharts />} />
          <Route path="/Packs" element={<Packs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    );
  } else if (isError) {
    content = (
      <Container className="d-flex vh-100 align-items-center justify-content-center">
        <h2>
          {error.status !== "FETCH_ERROR"
            ? `${error.status}: ${error.data.message} - check githubUsername in src/config.js`
            : `${error.status} - check URLs in  src/app/apiSlice.js`}
        </h2>
      </Container>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={AppFallback}>
      <HashRouter>
        <ThemeProvider theme={themes[theme]}>
          <ScrollToTop />
          <GlobalStyles />
          {content}
        </ThemeProvider>
      </HashRouter>
    </ErrorBoundary>
  );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;
// #endregion

export default App;