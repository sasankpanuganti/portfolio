import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sasank</span>
            <br />
            I am currently pursuing my B.Tech final year in 
            <span className="purple"> Computer Science and Engineering</span> 
            with a specialization in 
            <span className="purple"> Artificial Intelligence and Machine Learning.</span>
            <br />
            <br />
            Apart from coding, some other activities that I enjoy are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Surfing the browser
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning constantly, building fearlessly"
          </p>
          <footer className="blockquote-footer">Sasank</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
