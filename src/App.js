import React from "react";
import { Switch, Route } from "react-router-dom";

import "./stylesheets/_app.scss";

import { Cursor } from "./components/global/Cursor";
import { Nav } from "./components/global/Nav";
import { Footer } from "./components/global/Footer";
import { About } from "./components/pages/About";
import { Work } from "./components/pages/Work/Work";
import { WorkPage } from "./components/pages/Work/WorkPage";
import { Resume } from "./components/pages/Resume/Resume";
import { Blog } from "./components/pages/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Nav />
      <Switch>
        <Route exact path="/" children={Home} />
        <Route exact path="/projects/:id" children={<WorkPage />} />
        <Route exact path="/cv" children={<Resume />} />
        <Route exact path="/blog" children={<Blog />} />
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
    </div>
  );
};

export default App;
