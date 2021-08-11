import React from "react";
import { Navbar, Container } from "react-bootstrap";
import MainSecondPart from "./SecondPart/MainSecondPart";
import MainThirdPart from "./HowTOGetStated/MainThirdPart";
import "./Headers.css";

const Headers = () => {
  console.log();

  // const guestMenu = (
  //   <Nav.Link to="/" as={Link} >Login</Nav.Link>
  // );

  return (
    <div>
      <Navbar>
        <Container className="heading">
          <Navbar.Brand className="mainlogo">Smart Remittance</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/moneytransfer">Money Transfer</a>
              <a href="/register">Register</a>
              <a href="/login">Login</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MainSecondPart />
      <MainThirdPart />
    </div>
  );
};

export default Headers;
