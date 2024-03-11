import React from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

function Home2() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ka7d8pr',
        'template_9yi55ha',
        e.target,
        'bsLjp_5OxfmvS-MR8'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Full-Stack Web Developer student with a proven ability to adapt in
              bothself-starting and collaborative environments while staying
              focused onachieving high-quality results under a strict deadline.
              Eager to obtain a challenging position at a prestigious company
              that willexpand my learning and builds upon my developer skills.
              <br />
              <br />I am fluent in
              <i>
                <b className="purple">
                  {' '}
                  TypeScript, React, Express.js, and PostgreSQL.{' '}
                </b>
              </i>
              <br />
              <br />
              My area of interest is building &nbsp;
              <i>
                <b className="purple">Web Applications and Products </b>{' '}
                especially, help <b className="purple">businesses</b> get
                digital using web technologies
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" id="contact">
            <h1>
              GET IN <span class="purple">TOUCH</span>
            </h1>
            <p>
              Feel free to send a <span className="purple">message</span> for me
            </p>
            <form onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your name..."
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email..."
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject..."
                required
              />
              <textarea
                name="message"
                placeholder="Your message..."
                required
              ></textarea>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </form>
          </Col>
          <Col
            md={12}
            className="home-about-social"
            style={{ marginTop: '40px' }}
          >
            <h1>
              FIND <span class="purple">ME</span> ON
            </h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/zaher-aa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zaherabuamr/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
