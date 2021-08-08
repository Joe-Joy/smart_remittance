import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./Login.css";


import Login from "./Login";
import Loginleft from "./Loginleft";

const Mainlogin = () => {
  return (
    <div className="loginn">
      <Container fluid className ="login_page">
        <Row >
          <Col md={6} className="welcome_message">
            <Loginleft />
          </Col>
          <Col md={6} className="login_form">
            <Login />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Mainlogin;
