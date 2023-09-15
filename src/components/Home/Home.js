import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homeLogo from '../../Assets/Zaher.png';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ZAHER J. ABUAMRO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ height: '450px', width: '450px', borderRadius: '50%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </>
  );
}

export default Home;
