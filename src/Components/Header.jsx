import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./Contact";
import About from "./About";
import Support from "./Support";
import Recipes from "./Recipes";
import Home from "./Home";

function Header() {
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="recipe-title"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link element={<Home />}>Home</Nav.Link>
            <Nav.Link element={<Recipes />}>Recipes</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item element={<Contact />}>Contact</NavDropdown.Item>
              <NavDropdown.Item element={<About />}>
                About
              </NavDropdown.Item>
              <NavDropdown.Item element={<Support />}>
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