import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my-image.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm <b className="purple">Panuganti Sasank Satya Pavan Sai</b>, a passionate and driven
              final-year <b className="purple">Computer Science</b> student specialized in{" "}
              <b className="purple">AI & ML</b>.
              <br />
              <br />
              I enjoy building impactful tech products using
              <i>
                <b className="purple"> JavaScript, Java , Python, and Dart.</b>
              </i>{" "}
              I'm also exploring backend services and APIs.
              <br />
              <br />
              I love working with modern tools and frameworks like{" "}
              <i>
                <b className="purple">React.js, Node.js, Express, Firebase,</b>
              </i>{" "}
              and frequently experiment with
              <i>
                <b className="purple"> Next.js and Flutter.</b>
              </i>
              <br />
              <br />
              I'm particularly interested in creating real-world solutions across domains like{" "}
              <i>
                <b className="purple">healthcare, education, automation</b>
              </i>{" "}
              and integrating them with{" "}
              <i>
                <b className="purple">cloud, AI, and APIs</b>
              </i>.
              <br />
              <br />
              When I'm not coding, I'm probably reading, gaming, or exploring new tech on GitHub.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="Sasank's photo"
                style={{ 
                  borderRadius: "50%",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  width: "300px",
                  height: "300px",
                  objectFit: "cover"
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let's <span className="purple">connect</span> and collaborate on something amazing!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sasankpanuganti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/panuganti-sasank-satya-pavan-sai-9b7293247/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
