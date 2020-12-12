import React from "react";
import { Switch, Route } from "react-router-dom";

import "./app.scss";

import { Cursor } from "./components/global/Cursor";
import { Nav } from "./components/global/Nav";
import { Footer } from "./components/global/Footer";
import { About } from "./components/pages/About";
import { Work } from "./components/pages/Work/Work";
import { WorkPage } from "./components/pages/Work/WorkPage";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Nav />
      <Switch>
        <Route exact path="/" children={Home} />
        <Route exact path="/projects/:id" children={<WorkPage />} />
      </Switch>
      <Footer />
    </div>
  );
}

const Home = () => {
  return (
    <div className="home">
      <About />
      <Work />
      {/* Resume */}
    </div>
  );
};

export default App;
