import React from 'react';
import './About.css';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
// import pillow1 from '../../Image/pillow1.jpg';
// import outside from '../../Image/outside.jpg';
// import ss1 from '../../Image/ss1.jpg';
// import Pillowtalk from '../../Image/Pillowtalk.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const About = ()=>{
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return(
  <Container fluid id='about'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    <Row className='about-container'>
      <Col md lg xl xxl>
        <Col className='about-content' >
           <h1 className=' about -text heading pa2'>About Us</h1>
           <p className=' about-text pa2'>Spencer is currently 4 years old and steven is 3 years old. Spencer is currently 4 years old and steven is 3 years old.Spencer is currently 4 years old and steven is 3 years old.Spencer is currently 4 years old and steven is 3 years old.Spencer is currently 4 years old and steven is 3 years old.Spencer is currently 4 years old and steven is 3 years old.Spencer is currently 4 years old and steven is 3 years old.</p>
        </Col>
      </Col>
      <Col md lg xl xxl>
        <Col  className='about-content'>
          <h1 className=' heading pa2'>Purchase process</h1>
          <div className='about-text'>
           <ul>
            <li className='about-proccess '><b>non-refundable deposit $150</b></li>
            <li className='about-proccess '><b>pay in full or in part till pick up day </b></li>
            <li className='about-proccess '><b>group pick up around 8 weeks of age </b></li>
           </ul>
          <p className='pt-3'>  Once The Puppies are born it's a first come first serve bases.  Group pick ups is scheduled based on buyers needs around 8 weeks of age and can be accomadated otherwise with prospective parents</p>
          </div>
        </Col>
      </Col>
      <Col  lg xl xxl>
        <Col  className='about-content'>
          <h1 className='heading pa2'>Reviews</h1>
          <div className='about-text'>
           <ul>
            <li className='about-proccess '><b>owner name </b> review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
            <li className='about-proccess '><b>owner name </b>review one</li>
           </ul>
          </div>
        </Col>
      </Col>
    </Row>
  </Container>
  )
}

