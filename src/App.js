import React from "react";
import "./app.scss";

import { About } from "./components/pages/About";
import { Cursor } from "./components/global/Cursor";
import { CV } from "./components/pages/CV";
import { Footer } from "./components/global/Footer";
import { Nav } from "./components/global/Nav";
import { Work } from "./components/pages/Work";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Nav />
      <About />
      <Work />
      {/* <CV /> */}
      <Footer />
    </div>
  );
}

export default App;
