import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Navbar fixed="top" collapseOnSelect fluid="true" expand="lg" bg="dark" variant="dark">
        <LinkContainer to="/">
        <Navbar.Brand>{process.env.REACT_APP_TITLE}</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav >
              <Nav.Item>
              <LinkContainer to="/events">
                <Nav.Link>Events</Nav.Link>
              </LinkContainer>
              </Nav.Item>
              <LinkContainer to="/gallery">
                <Nav.Link>Gallery</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/newsletter">
                <Nav.Link>Newsletter</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/education">
                <Nav.Link>Education</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/aboutus">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contactus">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Routes />
      </div>
    );
  }
  
}

export default App;
