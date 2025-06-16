import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/fitness pro";
import emotion from "../../Assets/Projects/cyberpro";
import editor from "../../Assets/Projects/signlanguagepro";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/medipro.png";
import bitsOfCode from "../../Assets/Projects/host";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. FarmBot */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="FarmBot"
              description="A conversational chatbot designed for farmers to get real-time assistance on farming-related queries such as crop recommendations, pesticide usage, and seasonal practices. Built using natural language processing to improve rural tech accessibility."
              ghLink="https://github.com/sasankpanuganti/Farmbot"
            />
          </Col>

          {/* 2. Fitness Trainer */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Fitness Trainer"
              description="An AI-based fitness coach that evaluates exercise posture using computer vision. It tracks body movement through live video and provides instant feedback to help users perform workouts safely and effectively."
              ghLink="https://github.com/sasankpanuganti/Fitness_Trainer"
            />
          </Col>

          {/* 3. Text to Sign Language */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Text to Sign Language"
              description="A web-based accessibility tool that converts written text into animated sign language videos, helping bridge communication gaps for the hearing-impaired. Built with animation libraries and React for real-time output."
              ghLink="https://github.com/sasankpanuganti/text-to-sign-language-conversion"
            />
          </Col>

          {/* 4. HostelMate */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="HostelMate"
              description="An all-in-one hostel management mobile app developed in Flutter (Dart), featuring digital hostel allocation, medical and outing permissions, attendance tracking, meal billing, and a student complaint system—all under one roof."
              ghLink="https://github.com/sasankpanuganti/HostelMate"
            />
          </Col>

          {/* 5. MediBridge */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="MediBridge"
              description="A complete healthcare assistant platform offering smart features like medication reminders, chatbot consultation, emergency alerts, appointment scheduling, and access to nearby hospitals, labs, and pharmacies—all in one app."
              ghLink="https://github.com/sasankpanuganti/MediBridge"
            />
          </Col>

          {/* 6. Cyber Attack Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Cyber Attack Detection"
              description="A cybersecurity solution leveraging anomaly detection and machine learning algorithms (KMeans, Logistic Regression, Random Forest, DBSCAN) to detect potential attacks and suspicious activity in network traffic datasets."
              ghLink="https://github.com/sasankpanuganti/cybersecurity-attackdetection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
