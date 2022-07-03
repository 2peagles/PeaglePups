import React from 'react';
import './App.css';
import 'tachyons';
import { Home } from './Components/Hero/Hero';
import { NavBar } from './Components/NavBar/NavBar';
import { About } from './Components/About/About';
import { Puppy } from './Components/Card/Puppy';
import { Footer } from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
// import { Contact } from './Components/Contanct/Contact';

function App () {
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
    return (
      <>
      <NavBar/>
      <Home/>
      <div id='tscontainer'>
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "transparent",
          //   },
          // },
          fullScreen:{
            enable:false
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn:'window',
            events: {
                  resize: true
              },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "down",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 6,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.8
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
        <About id='your div'/>
        </div>
      {/* <About/> */}
      <Puppy/>
      {/* <Contact/> */}
      <Footer/>
      </>
  );
}

export default App;
