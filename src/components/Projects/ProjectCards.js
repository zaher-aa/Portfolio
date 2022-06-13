import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal, BiCodeAlt } from 'react-icons/bi';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description}
        </Card.Text>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '30px',
          }}
        >
          <Button variant="primary" href={props.code} target="_blank">
            <BiCodeAlt /> Code
          </Button>
          <Button variant="primary" href={props.demo} target="_blank">
            <BiLinkExternal /> Demo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
