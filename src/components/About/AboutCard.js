import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Zaher Abuamro </span>
            from <span className="purple"> Gaza, Palestine.</span>
            <br />
            I'm a junior Full stack developer | Software Engineering student at{' '}
            <span className="purple">
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.alazhar.edu.ps/eng/index.asp"
                style={{ textDecoration: 'none', color: 'unset' }}
              >
                Al Azhar University
              </a>
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Horse Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Zaher</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
