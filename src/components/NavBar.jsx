import React from "react";
import styled from "styled-components";
// State
import { useAppContext } from "../appContext";
import PropTypes from "prop-types";
// Router
import { Link, useLocation } from "react-router-dom";
// Images
import defaultLogo from "../images/Image.png";
// Components
import { Link as ScrollLink } from "react-scroll";
import { Container, Nav, Navbar } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";

// #region constants
const navLinks = {
  routes: [
    { id: "1R", name: "Home", route: "/" },
    { id: "2R", name: "Chart Search", route: "/All-StepCharts" },
    { id: "3R", name: "My Packs", route: "/Packs" },
    { id: "4R", name: "Other Packs", route: "/SpecialPacks" },
    { id: "5R", name: "Vids", route: "/Vids" },
  ],
  to: [
    { id: "1T", name: "Home", to: "Home" },
    { id: "2T", name: "About Me", to: "About" },
    { id: "3T", name: "Youtube", to: "Videos" },
    { id: "4T", name: "StepCharts", to: "StepCharts" },
    { id: "5T", name: "Contact", to: "Contact" },
    { id: "6T", name: "ITG", to: "/All-StepCharts" },
    { id: "7T", name: "Minecraft", to: "/Minecraft" },
    { id: "8T", name: "Portfolio", to: "/Portfolio" },
  ],
  packs: [
    { id: "1P", name: "Home", to: "/" },
    { id: "2P", name: "ITG", to: "/All-StepCharts" },
    { id: "3P", name: "Chart Search", to: "/All-StepCharts" },
    { id: "4P", name: "Foreword", to: "Philosophy" },
    { id: "5P", name: "Captivation", to: "Captivation" },
    { id: "6P", name: "Hollow", to: "Hollow" },
    { id: "7P", name: "Odyssey", to: "Odyssey" },
    { id: "8P", name: "Desolation", to: "Desolation" },
    { id: "9P", name: "Asylum", to: "Asylum" },
    { id: "10P", name: "Isle", to: "Isle" },
    { id: "11P", name: "Haven", to: "Haven" },
    { id: "12P", name: "Paradise", to: "Paradise" },
  ]
};
// #endregion

// #region styled-components
const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

const StyledNavItem = styled(Nav.Item)`

  .nav-link {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
    color: ${({ theme }) => (theme.name === "light" ? "#45413C" : "#F5F2E8")};
    background-color: ${({ theme }) => (theme.name === "light" ? "#CCE6FF" : "#2c2f33")};
    border: ${({ theme }) => (theme.name === "light" ? "1px solid #f1f1f1" : "1px solid #2c2f33")};
    
    &.active {
      background-color: ${({ theme }) => (theme.name === "light" ? "#ececec" : "#4a4e52")};
    }

    &:hover {
      background-color: ${({ theme }) => (theme.name === "light" ? "#e1e1e1" : "#3d4145")};
    }
  }
`;

const Separator = styled.div`
  height: 2rem;
  width: 1px;
  background-color: ${({ theme }) => (theme.name === "light" ? "#dee2e6" : "#45413C")};
  margin: auto 1rem;
`;
// #endregion


// #region component
const propTypes = {
  Logo: PropTypes.node,
};
const defaultProps = {
  Logo: defaultLogo,
};

const NavBar = ({ Logo }) => {
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();
  const { pathname } = useLocation();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="Logo"
              src={Logo === null ? defaultLogo : Logo}
              width="35"
              height="35"
              className="rounded-circle"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/Packs"
                ? navLinks.packs.map((el, index) => (
                    <React.Fragment key={el.id}>
                      {el.name === "Foreword" && <Separator />}
                      <StyledNavItem>
                     {(el.to.startsWith("/")) && <Link
                        to={el.to}
                        className={
                          pathname === el.to ? "nav-link active" : "nav-link"
                        }
                        onClick={closeExpanded}
                      >
                        {el.name}
                      </Link>}
                      {(!el.to.startsWith("/")) &&
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className="nav-link"
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </ScrollLink>}
                      </StyledNavItem>
                    </React.Fragment>
                  ))
                : pathname === "/"
                ? navLinks.to.map((el) => (
                  <React.Fragment key={el.id}>
                    <StyledNavItem key={el.id}>
                    {(el.to.startsWith("/")) && <Link
                        to={el.to}
                        className={
                          pathname === el.to ? "nav-link active" : "nav-link"
                        }
                        onClick={closeExpanded}
                      >
                        {el.name}
                      </Link>}
                      {(!el.to.startsWith("/")) &&
                      <ScrollLink
                        to={el.to}
                        spy={true}
                        activeClass="active"
                        className="nav-link"
                        onClick={closeExpanded}
                      >
                        {el.name}
                      </ScrollLink>}
                    </StyledNavItem>
                    {(el.name === "Contact") && <Separator />}
                    </React.Fragment>
                  ))
                : navLinks.routes.map((el) => (
                    <StyledNavItem key={el.id}>
                      <Link
                        to={el.route}
                        className={
                          pathname === el.route ? "nav-link active" : "nav-link"
                        }
                        onClick={closeExpanded}
                      >
                        {el.name}
                      </Link>
                    </StyledNavItem>
                  ))}
            </Nav>
            <Nav>
              <ThemeToggle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
// #endregion

export default NavBar;
