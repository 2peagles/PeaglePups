import React from 'react';
import './Hero.css';
import {Container, Row, Col} from 'react-bootstrap';

export const Home = () => {
  return (
    <Container fluid id='hero' >
      <Row className='hero'>
        <Col className='overlay'>
          <h1 className='hero-heading'>precious peagle puppies</h1>
         </Col>
      </Row>
    </Container>
  )
}
