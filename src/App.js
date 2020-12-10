import React from "react";
import "./app.scss";

import { Switch, Route } from "react-router-dom";

import { Cursor } from "./components/global/Cursor";
import { Nav } from "./components/global/Nav";
import { Footer } from "./components/global/Footer";

import { About } from "./components/pages/About";
import { Work } from "./components/pages/Work";
import { WorkPage } from "./components/pages/WorkPage";

function App() {
  return (
    <div className="App">
      <Cursor />
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
      <Nav />
      <About />
      <Work />
    </div>
  );
};

export default App;
