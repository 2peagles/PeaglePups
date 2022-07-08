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
    <Container fluid id='puppies' className="puppy-container">
      <Row xs={1} md={2} >
          <Col className='puppy-content' >
          <h1 className='puppy-heading'>Litter One</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={breezy}
            alt="First slide"
            height='600px'
            width="300px"
          />
          <Carousel.Caption >
            <h3>Breezy</h3>
            <p>The only girl in your first litter. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Bailey}
            alt="Second slide"
            height='600px'
            width="300px"
          />

          <Carousel.Caption>
            <h3>Bailey</h3>
            <p>One of the two cow boys we had. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={rocky}
            alt="Third slide"
            height='600px'
            width="300px"
          />

          <Carousel.Caption>
            <h3>Rocky</h3>
            <p>
             The second of the cow boys he weights 27lbs! 
             He has really long legs but he's a sweetheart.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
      <Col className='puppy-content'>
          <h1 className='puppy-heading'>Litter Two</h1>
      <Carousel  activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={marley}
            alt="First slide"
            height='600px'
            width="300px"
          />
          <Carousel.Caption>
            <h3>Marley</h3>
            <p>He is lives with his brother Bailey from the first litter.
              He is a big boy almost a year and he weighs more than Bailey!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={mila}
            alt="Second slide"
            height='600px'
            width="300px"
          />

          <Carousel.Caption>
            <h3>MIla</h3>
            <p>The only girl in our Second liter. She has quite short legs, and a beautiful pattern. 
              She is with her brother Macy from this litter as well.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={boots}
            alt="Third slide"
            height='600px'
            width="300px"
          />

          <Carousel.Caption>
            <h3>Macy</h3>
            <p>
              He has long legs and is quite big as well. He lives with his sister mila.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </Col>
      </Row>
  </Container>
  )
}
