import React from 'react';
import './App.css';
import 'tachyons';
import { Home } from './Components/Hero/Hero';
import { NavBar } from './Components/NavBar/NavBar';
import { About } from './Components/About/About';
import { Puppy } from './Components/Card/Puppy';
import { Footer } from './Components/Footer/Footer';
// import { Contact } from './Components/Contanct/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Puppy/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
