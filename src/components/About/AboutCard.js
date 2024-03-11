import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Zahir </span>
            <br />
            I'm a junior Full stack developer student | Software Engineering student at{' '}
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
          </p>
          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Zahir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
