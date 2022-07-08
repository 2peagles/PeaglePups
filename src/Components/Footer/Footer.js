import React from 'react';
import './Footer.css';
import { TiSocialInstagram } from 'react-icons/ti';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsChatSquareText } from 'react-icons/bs';
import { Contact } from '../Contact/Contact';
import { Popup } from './Popup';
import { useState } from 'react';

export const Footer = () => {
  const [buttonPopup, setButtonPopup] =useState(false)

  return (
    <div>
      <div className='footer-container' id='footer'>
        <a
          href='https://www.facebook.com/groups/274673582658658'
          target='_blank'
          rel='noreferrer'>
          <FaFacebookSquare className='icon' /></a>
        <a
          href='https://www.instagram.com/preciouspeaglepuppies/'
          target='_blank'
          rel='noreferrer'>
          <TiSocialInstagram className='icon' /></a>
        <button id='contact' onClick={( )=>setButtonPopup(true)}><BsChatSquareText className='icon grow' /></button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <Contact />
          </Popup>
      </div>
    </div>
  )
}
