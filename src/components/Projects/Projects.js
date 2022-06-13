import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import blogPost from '../../Assets/Projects/blog-post.png';
import redditClone from '../../Assets/Projects/reddit-clone.jpeg';
import quizzer from '../../Assets/Projects/quizzer.png';
import estore from '../../Assets/Projects/estore.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizzer}
              isBlog={false}
              title="Quizzer"
              description="A quiz-maker app, built for teachers to create quizzes and spread them to students who can attend exams, as Quizzer’s main feature. Quizzer is Built with TypeScript, React, Express, PostgreSQL, and Jest (TDD)."
              link="https://github.com/GSG-G11/Quizzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estore}
              isBlog={false}
              title="E-store"
              description="E-commerce website for trading electronic devices, worked with my team to develop this website through analyzing the project and distributing tasks. Reactjs has been used as the front-end library, Expressjs as the back-end framework, PostgreSQL as our Database, and Jest."
              link="https://github.com/GSG-G11/e-store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redditClone}
              isBlog={false}
              title="Reddit Clone"
              description="A Reddit clone with user authentication using JSON web token, bcrypt, and cookies,  Vanilla-JavaScript has been used for the front-end, Expressjs at the back-end, PostgreSQL as my Database, and Jest as our unit-testing framework, this was my first big-scale project to deal with, and I’ve learned how to plan correctly for a successful project."
              link="https://github.com/GSG-G11/Zaher-Reddit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogPost}
              isBlog={false}
              title="Blog Post"
              description="A Blog Post where you can create an account, sign in to your account, and share your thoughts with other users, Vanilla JavaScript has been used for the front-end, and Express.js, PostgreSQL in the backend, and Jest for testing. This project was one of the most enjoyable projects that I’ve participated in before, it was a great team with such great chemistry between us."
              link="https://github.com/GSG-G11/Blog-Post"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
