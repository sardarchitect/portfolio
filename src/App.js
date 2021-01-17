import React from "react";
import { Switch, Route } from "react-router-dom";
import { About } from "./components/pages/About";
import "./_app.scss";

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Footer } from "./components/pages/Footer";

function App() {
  let parallax;
  return (
    <div className="App">
      <Parallax className='parallax_layer' ref={(ref) => (parallax = ref)} pages={2}>
        <ParallaxLayer offset={0} speed={0.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="App__title" >
            <h1>ARVINDER</h1>
            <h1>SINGH</h1>
            <h2>PORTFOLIO '21</h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.75} speed={1}>
        <About/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3} style={{ backgroundColor: 'rgb(224, 140, 101)' }} children={<Footer />} />
      </Parallax>
    </div>
  );
}

export default App;
