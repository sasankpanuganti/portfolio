import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiPostgresql,
  SiDart,
  SiSwagger,
  SiPostman,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* HTML */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>

      {/* CSS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      {/* API (Swagger) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
      </Col>


      {/* Firebase */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>

      {/* PostgreSQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      {/* Dart */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>

    </Row>
  );
}

export default Techstack;
