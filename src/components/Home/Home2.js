import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/mypic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
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
            I’ve fallen head over heels for programming, and, well, I’d like to think I’ve picked up a trick or two along the way. 😏
              <br />
              <br />I have good experience with languages like
              <i>
                <b className="purple"> Java, Python, JavaScript and C++. </b>
              </i> —basically, the Avengers of programming languages.
              <br />
              <br />
              My interests? &nbsp;
              <i>
                <b className="purple">Building snazzy web technologies, creating cool products, </b> and diving into the mysterious realms of 
                {" "}
                <b className="purple">
                Big Data.
                </b>
              </i>
              <br />
              <br />
              When I’m not geeking out over code, I’m passionately crafting
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Vue.js .</b>
              </i> Honestly, I love turning ideas into something tangible and shareable—it’s like magic but with code. 🪄💻
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img 
                    src={myImg} 
                    className="img-fluid" 
                    alt="avatar" 
                    style={{
                      borderRadius: "50%", 
                      width: "400px", 
                      height: "400px", 
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
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nitesh1012"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Chintz0101"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/nitesh1012"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/call_me_chintz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
