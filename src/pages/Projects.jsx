import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import ratelab from "../assets/projects/ezgif.com-speed.gif";
import googleDocs from '../assets/projects/docsClone.png'
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12}  className="project-card">
            <ProjectCard
              imgPath={ratelab}
              isBlog={false}
              title="RateLab (Content Managment System)"
              ghLink="https://github.com/aadhi220/Mern-Blog-CMS.git"
              description="RateLab, a MERN-based CMS, offers a responsive UI with React and Tailwind CSS. Secure backend using Node.js and Express, with bcrypt and JWT for authentication. Features admin controls, staff dashboards, and user interactions like subscriptions and author requests, creating a versatile and engaging content management experience "
              note=" The demoLink will take some time to start up the server."
              demoLink="https://ratelab-server.onrender.com"
              demoVideo="https://youtu.be/S8lEzEZzfl0"
              tech="React , Node.js , Express , MongoDB"
            />
          </Col>

          <Col md={12}  className="project-card">
            <ProjectCard
              imgPath={googleDocs}
              isBlog={false}
              title="Google Docs Clone"
              ghLink="https://github.com/aadhi220/doc-app-firebase.git"
              description="This project involves replicating the user interface and key functionalities of Google Docs, incorporating elements such as secure login, Google signup, and the integration of React Quill as the text editor..."
            
              demoLink="https://google-docsclone-v.vercel.app/"
              demoVideo="https://www.youtube.com/watch?v=CEVdwLveHRk"
              tech="React ,Firebase ,Tailwind ,MaterialUI"
            />
          </Col>
     


     
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
