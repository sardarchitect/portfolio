import React from "react";
import { Switch, Route } from "react-router-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import { About } from "./components/pages/About";
import { Footer } from "./components/pages/Footer";
import { Work } from "./components/pages/Work";

import "./_app.scss";

function App() {
  let parallax;
  return (
    <div className="App">
      <Parallax
        className="parallax_layer"
        ref={(ref) => (parallax = ref)}
        pages={3}
      >
        <About />
        <Work />
        <Footer />
      </Parallax>
    </div>
  );
}

export default App;
