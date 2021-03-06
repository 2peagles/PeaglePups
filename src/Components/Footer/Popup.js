import React from 'react';
import './Popup.css';
import { GrClose } from 'react-icons/gr'

export const Popup = ( props ) => {
  return ( props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
        <button className='close-btn' onClick={(()=> props.setTrigger(false))}>
            <GrClose />
        </button>
         { props.children }
        </div>
    </div>
  ) : ' ';
}
