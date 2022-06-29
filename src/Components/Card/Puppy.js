import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Puppy.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import breezy from '../../Image/breezy.jpg';
import Bailey from '../../Image/Bailey.jpg';
import rocky from '../../Image/rocky.jpg';
// import frankie from '../../Image/frankie.jpg';
// import reese from '../../Image/reese.jpg';
// import charlie from '../../Image/charlie.jpg';
import marley from '../../Image/Marley.jpg';
import mila from '../../Image/mila.jpg';
import boots from '../../Image/boots.jpg';
// import tucker from '../../Image/tucker.jpg';
// import stanley from '../../Image/stanley.jpg';


export const Puppy = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='puppy-container' id='puppies'>
    <Container className="container" fluid>
      <Row xs={1} md={2}>
        <Col>
      <Carousel activeIndex={index} onSelect={handleSelect} className="left">
        <Carousel.Item>
          <img
            className="d-block w-100 fluid"
            src={breezy}
            alt="First slide"
            height='350px'
            width="300px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Bailey}
            alt="Second slide"
            height='350px'
            width="300px"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={rocky}
            alt="Third slide"
            height='350px'
            width="300px"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>

      <Col>
      <Carousel  activeIndex={index} onSelect={handleSelect} className="right">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={marley}
            alt="First slide"
            height='350px'
            width="300px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mila}
            alt="Second slide"
            height='350px'
            width="300px"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={boots}
            alt="Third slide"
            height='350px'
            width="300px"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>
  </Row>
  </Container>
</div>
  )
}
