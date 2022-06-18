import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Puppy.css';
import breezy from '../../Image/breezy.jpg';
import Bailey from '../../Image/Bailey.jpg';
import rocky from '../../Image/rocky.jpg';
// import frankie from '../../Image/frankie.jpg';
// import reese from '../../Image/reese.jpg';
// import charlie from '../../Image/charlie.jpg';

export const Puppy = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='slide-container' id='puppies'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={breezy}
            alt="First slide"
            height='650px'
            width='550px'
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
            height='650px'
            width='550px'
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
            height='650px'
            width='550px'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
