// MODULE IMPORTS
import React from "react";
import { Switch, Route } from "react-router-dom";
// COMPONENT IMPORTS
import { Home } from "./components/pages/Home";
import { Work } from "./components/pages/Work";
import { Bio } from "./components/pages/Bio";
import { Error404 } from "./components/pages/Error404";
import { WorkPage } from "./components/pages/WorkPage";
// STYLE IMPORTS
import "./_App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" children={[<Home />, <Work />]} />
        <Route path="/bio" children={<Bio />} />
        <Route path="/projects/:id" children={<WorkPage />} />
        <Route path="/" children={<Error404 />} />
      </Switch>
    </div>
  );
}

export default App;