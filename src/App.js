// MODULE IMPORTS
import React from "react";
import { Switch, Route } from "react-router-dom";
// COMPONENT IMPORTS
import { About } from "./components/pages/About";
import { Work } from "./components/pages/Work";
import { Resume } from "./components/pages/Resume";

// STYLE IMPORTS
import "./_app.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" children={[<About/>, <Work/>]} />
        <Route exact path="/cv" children={<Resume/>} />
      </Switch>
    </div>
  );
}

export default App;
