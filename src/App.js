import React from "react";
import "./app.scss";

import { Cursor } from "./components/global/Cursor";
import { Nav } from "./components/global/Nav";
import { Footer } from "./components/global/Footer";

import { About } from "./components/pages/About";
import { Work } from "./components/pages/Work";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Nav />
      <About />
      {/* <Work /> */}
      <Footer />
    </div>
  );
}

export default App;
