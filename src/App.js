import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Resume from './component/Resume/Resume';
import Myskills from './component/Myskills/Myskills';
import Myjob from './component/Myjob/Myjob';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Particles from 'react-particles-js'

const particlesOpt = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

function App() {
  return (

    <div className="App">
      <div className="portfolio">
        <Particles className="particles"
          params={particlesOpt} />
        <Header />
        <Resume />
        <Myskills />
        <Myjob />
        <Footer />
      </div>

    </div>

  );
}

export default App;
