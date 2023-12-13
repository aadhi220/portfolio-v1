import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiVite,
} from "react-icons/si";


const Toolstack = () => {
  return (
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://example.com/visualstudiocode" style={{ textDecoration: "none", color: "#007ACC" }} target="_blank" rel="noopener noreferrer">
      <SiVisualstudiocode />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://vitejs.dev/" style={{ textDecoration: "none", color: "#9c4cf7" }} target="_blank" rel="noopener noreferrer">
      <SiVite />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://example.com/postman" style={{ textDecoration: "none", color: "#FF6C37" }} target="_blank" rel="noopener noreferrer">
      <SiPostman />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://example.com/vercel" style={{ textDecoration: "none", color: "#ffff" }} target="_blank" rel="noopener noreferrer">
      <SiVercel />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://example.com/netlify" style={{ textDecoration: "none", color: "#00C7B7" }} target="_blank" rel="noopener noreferrer">
      <SiNetlify />
    </a>
  </Col>


</Row>


  );
}

export default Toolstack;
