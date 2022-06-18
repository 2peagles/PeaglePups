import React from 'react';
import './About.css';
import pillow1 from '../../Image/pillow1.jpg';
import outside from '../../Image/outside.jpg';
import ss1 from '../../Image/ss1.jpg';
import Pillowtalk from '../../Image/Pillowtalk.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const About = () => {
  return (
    <div className=' about-container' id='about'>
      <h1 className='heading bt bb b--white pa2'>About Us</h1>
      <div className='about-content pa3'>
        <p className=''>Spencer is currently 4 years old and steven is 3 years old. They are peagles beagle/pekigness breed, at about 20lbs each. They're the apple of my eye with two differen't personalities. We had spencer first and her favorite thing to do it go on a walk at <b> lincoln dive</b>. Steven on the other hand loves good old fetch he would fetch all day long if he could. He loves digging in his toy basket and making a mess without cleaning up of course.... Though they are different they have some similarties including cuddling and treats! I'm not sure which one they like more haha I'm sure I do. They love dressing up I think steven likes it more than spencer though he's more danty. They love watching tv Lucky Dog & HeartLand are there favorities.</p>
        <h1 className='heading'>Purchase process</h1>
        <p className='about-text'>  Once The Puppies are born it's a first come first serve bases. You can put your deposit down and gradually pay till pick up day or pay in full upfront or the day of pick up. Group pick ups is scheduled based on buyers needs around 8 weeks of age and can be accomadated otherwise with prospective parents</p>
      </div>
      <Container>
        <Row>
          <Col xs={6} md={3}><img src={pillow1} alt="Spencer feeding the puppies" /></Col>
          <Col xs={6} md={3}><img src={outside} alt="Spencer with the puppies" /></Col>
          <Col xs={6} md={3}><img src={ss1} alt="Spencer and Steven sitting in a chair" /></Col>
          <Col xs={6} md={3}><img src={Pillowtalk} alt="Spencer and Steven sitting in a chair" /></Col>
        </Row>
      </Container>
    </div>
  )
}
//className='pr3-ns mb4 mb0-ns w-100 w-40-ns' IMG DIV BUT IT'S LEFT AND NOT RIGHT
