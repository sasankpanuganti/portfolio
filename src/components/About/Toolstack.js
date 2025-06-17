import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiMicrosoft,
  SiGithub,
  SiDocker,
  SiFigma,
  SiNetlify,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* OS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft />
      </Col>

      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>

      {/* Figma */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>

      {/* Vercel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      {/* Netlify */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
    </Row>
  );
}

export default Toolstack;
