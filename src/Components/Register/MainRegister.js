import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./Register.css";

import Registerleft from "./RegisterLeft";
import RegisterRight from "./RegisterRight";

const Mainlogin = () => {
  return (
    <div className="loginn">
      <Container fluid className ="login_page">
        <Row >
          <Col md={6} className="welcome_message">
            <Registerleft />
          </Col>
          <Col md={6} className="register_page">
            <RegisterRight />
          </Col>
        </Row>
      </Container>
    </div>  
  );
};
export default Mainlogin;
