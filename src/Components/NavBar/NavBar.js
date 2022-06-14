import React from 'react';
import './NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';

export const NavBar = () => {
  return (
    <nav>
        {/* <li><a href='/'>Precious Peagle Puppies</a></li> */}
        <ol>
            <li><Link smooth to='#hero'>Home</Link></li>
            <li>< Link smooth to='#about'>About</Link></li>
            <li><Link smooth to='#puppies'>Puppies</Link></li>
        </ol>
    </nav>
  )
}
