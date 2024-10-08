import React from "react";
import { StrictMode } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Support from "../Pages/Support";
import Recipes from "../Pages/Recipes";
import Home from "./Home";
import SignIn from "../Pages/SignIn";
// import logo from 'https://www.canva.com/design/DAGOPVIiglw/e6gmZaepUJOgQFUnTIHODA/view?utm_content=DAGOPVIiglw&utm_campaign=designshare&utm_medium=link&utm_source=editor';

'strict';
function Header() {
    return(
        <>
        <Navbar expand="lg" className="bg-white-transparent">
      <Container>
        {/* <img src={logo} alt="" /> */}
        <Navbar.Brand href="#Home" className="recipe-title">My Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={SignIn}>Home {SignIn}</Nav.Link>
            <Nav.Link>Recipes</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <link>
                About
                </link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              Support Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sign in
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Header;