import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

import "./Headers.css";

const Headers = () => {
  console.log();


  
  // const guestMenu = (
  //   <Nav.Link to="/" as={Link} >Login</Nav.Link>
  // );

  return (
      <Navbar>
        <Container className="heading">
          <Navbar.Brand className="logo">Smart Remittance</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/moneytransfer" as={Link} >Money Transfer</a>
              <a href="/register">Register</a>
              <a href="/login">Login</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Headers;
