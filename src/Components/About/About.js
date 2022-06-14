import React from 'react';
import './About.css';
import spencer62 from '../../Image/spencer62.png';
import spencer from '../../Image/spencer.png';
import pups from '../../Image/pups.jpg';
import beagle from '../../Image/beagle.jpg';


export const About = () => {
  return (
    <div className=' about-container' id='about'>
      <h1 className='heading bt bb b--white pa2'>About Us</h1>
      <div className='about-content pa3'>
        <p className=''>Spencer is currently 4 years old and steven is 3 years old. They are peagles beagle/pekigness breed, at about 20lbs each. They're the apple of my eye with two differen't personalities. We had spencer first and her favorite thing to do it go on a walk at <b> lincoln dive</b>. Steven on the other hand loves good old fetch he would fetch all day long if he could. He loves digging in his toy basket and making a mess without cleaning up of course.... Though they are different they have some similarties including cuddling and treats! I'm not sure which one they like more haha I'm sure I do. They love dressing up I think steven likes it more than spencer though he's more danty. They love watching tv Lucky Dog & HeartLand are there favorities.</p>
        <h1 className='heading'>Purchase process</h1>
        <p className='about-text'>  Once The Puppies are born it's a first come first serve bases. You can put your deposit down and gradually pay till pick up day or pay in full upfront or the day of pick up. Group pick ups is scheduled based on buyers needs around 8 weeks of age and can be accomadated otherwise with prospective parents</p>
      </div>
      <article>
        <div class="">
          <div class=" box container">
            <img src={spencer62} alt="Spencer feeding the puppies" />
          </div>
          <div class=" box container">
            <img src={ spencer }alt="Spencer with the puppies" />
          </div>
          <div class=" box container">
            <img src={ pups } alt="Spencer and Steven sitting in a chair"  />
          </div>
          <div class=" box container">
            <img src={ beagle } alt="cute lil dog"  />
          </div>
        </div>
      </article>
    </div>
  )
}
//className='pr3-ns mb4 mb0-ns w-100 w-40-ns' IMG DIV BUT IT'S LEFT AND NOT RIGHT
