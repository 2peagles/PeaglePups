import React from 'react';
import './About.css';
// import pillow1 from '../../Image/pillow1.jpg';
// import outside from '../../Image/outside.jpg';
// import ss1 from '../../Image/ss1.jpg';
// import Pillowtalk from '../../Image/Pillowtalk.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const About = ()=>{
  return(
  <Container fluid id='about'>
    <Row className='about-container' sm lg xl xxl>
      <Col  lg xl xxl>
        <Col className='about-content first-box' >
           <h1 className='heading pa2'>About Us</h1>
           <p className=' about-text pa2'>Spencer is currently 4 years old and steven is 3 years old. Spencer is currently 4 years old and steven is 3 years old.Spencer is currently 4 years old and steven is 3 years old.Spencer is currently 4 years old and steven is 3 years old.Spencer is currently 4 years old and steven is 3 years old.Spencer is currently 4 years old and steven is 3 years old.Spencer is currently 4 years old and steven is 3 years old.</p>
        </Col>
      </Col>
      <Col lg xl xxl>
        <Col  className='about-content'>
          <h1 className='heading pa2'>Purchase process</h1>
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

