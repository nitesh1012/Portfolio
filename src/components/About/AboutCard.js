import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Row, Col } from "react-bootstrap";
import educationImg from "../../Assets/undraw_designer_0ogx-removebg.png"; // Replace with the correct path to the Education image
import experienceImg from "../../Assets/undraw_certificate_71gt-removebg.png"; // Replace with the correct path to the Experience image
 

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitesh Thota </span>
            from <span className="purple"> Fairfax, Virginia, USA.</span>
            <br />
            I am currently enrolled as a master’s student in Computer Science at George Mason University.
            <br />
            I have worked as a Software Developer and Data Engineer at Modak Analytics for Humana Inc (client) and I have 2 years of professional experience.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* Two-line gap */}
          <br />
          <br />

          {/* Education Section */}
          <Row>
            <Col md={8}>
              <p style={{ textAlign: "justify" }}>
                <span className="purple">Education:</span>
                <br />
                M.S. in Computer Science (Aug 2023 - May 2025(Expected))<br />
                <span style={{ fontStyle: "italic" }}>George Mason University, Fairfax, VA</span>, GPA: 3.8
                <br />
                Relevant Coursework: Software Engineering, Component-Based Software Development, DevOps Practices, Database Systems, NLP, Data Mining, Analysis of Algorithms
                <br />
                <br />
                B.Tech. in Electronics and Communication Engineering (Aug 2017 - Apr 2021)<br />
                <span style={{ fontStyle: "italic" }}>SRM Institute of Science and Technology, Tamil Nadu, India</span>, GPA: 3.5
                <br />
                Relevant Coursework: Algorithms, Data Structures, Database Management Systems, Computer Networks
              </p>
            </Col>
            <Col md={4} className="text-center">
              <img
                src={experienceImg}
                alt="Education"
                className="img-fluid"
                style={{
                  maxWidth: "200%", // Responsive
                  height: "400px", // Explicit height
                  objectFit: "contain", // Maintain aspect ratio
                  transform: "translateX(300px)", // Push image to the right
                }}
              />
            </Col>
          </Row>

          <br />
          <br />

          {/* Experience Section */}
          <Row>
            <Col md={8}>
              <p style={{ textAlign: "justify" }}>
                <span className="purple">Experience:</span>
                <br />
                Software Development Engineer, Modak Analytics (Jul 2021 - Jul 2023)<br />
                Client - Humana Inc. <br />
                - Engineered automated ETL processes using Python and Java, reducing pipeline latency by 20%.<br />
                - Optimized data pipelines to handle 50% larger volumes using formats like Parquet and Avro.<br />
                - Developed Google Cloud Functions processing millions of CSV entries with 40% faster performance.<br />
                - Designed full-stack web applications using <span className="purple">Spring Boot, React.js</span>, and <span className="purple">Node.js</span> for seamless front-end and back-end integration.<br />
                - Leveraged <span className="purple">RESTful APIs</span> and <span className="purple">MySQL/PostgreSQL</span> databases to handle CRUD operations efficiently and deliver high-performing, scalable applications.<br />
                - Automated CI/CD pipelines using <span className="purple">Jenkins</span>, <span className="purple">Docker</span>, and <span className="purple">Kubernetes</span>, reducing deployment times and ensuring seamless production rollouts.<br />
              </p>
            </Col>
            <Col md={4} className="text-center">
              <img
                src={educationImg}
                alt="Experience"
                className="img-fluid"
                style={{
                  maxWidth: "200%", // Responsive
                  height: "400px", // Explicit height
                  objectFit: "contain", // Maintain aspect ratio
                  transform: "translateX(300px)", // Push image to the right
                }}
              />
            </Col>
          </Row>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
