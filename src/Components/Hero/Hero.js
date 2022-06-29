import React from 'react';
import './Hero.css';
import chairss1 from '../../Image/chairss1.jpg';

const divStyle ={
  backgroundImage: 'url(' + chairss1 + ')',
};
export const Home = () => {
  return (
    <div
       className='hero'
        id='hero' 
        style={divStyle}>
      {/* <div className="overlay">
        <h1>Peacious Peagle Puppies</h1>
    </div> */}
  </div>
  )
}
