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
    <Row className='about-container'>
      <Col>
        <Col className='about-content'>
           <h1 className='heading pa2'>About Us</h1>
           <p className=' about-text pa2'>Spencer is currently 4 years old and steven is 3 years old. They are peagles beagle/pekigness breed, at about 20lbs each. They're the apple of my eye with two differen't personalities. We had spencer first and her favorite thing to do it go on a walk at <b> lincoln dive</b>. Steven on the other hand loves good old fetch he would fetch all day long if he could. He loves digging in his toy basket and making a mess without cleaning up of course.... Though they are different they have some similarties including cuddling and treats! I'm not sure which one they like more haha I'm sure I do. They love dressing up I think steven likes it more than spencer though he's more danty. They love watching tv Lucky Dog & HeartLand are there favorities.</p>
        </Col>
      </Col>
      <Col>
        <Col className='about-content'>
          <h1 className='heading pa2'>Purchase process</h1>
          <div className='about-text'>
           <ul>
            <li className='about-proccess '>non-refundable deposit $150</li>
            <li className='about-proccess '>pay in full or in part till pick up day</li>
            <li className='about-proccess '>group pick up around 8 weeks of age</li>
           </ul>
          <p >  Once The Puppies are born it's a first come first serve bases.  Group pick ups is scheduled based on buyers needs around 8 weeks of age and can be accomadated otherwise with prospective parents</p>
          </div>
        </Col>
      </Col>
    </Row>
  </Container>
  )
}

