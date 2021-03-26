// MODULE IMPORTS
import React from "react";
import { Switch, Route } from "react-router-dom";
// COMPONENT IMPORTS
import { About } from "./components/pages/About";
import { Work } from "./components/pages/Work";
import { Resume } from "./components/pages/Resume";
import { WorkPage } from "./components/pages/WorkPage";
import { Blog } from "./components/pages/Blog";
import { BlogPage } from "./components/pages/BlogPage";
import { Sandbox } from "./components/sandbox/Sandbox";
import { Error404 } from "./components/pages/Error404";
// STYLE IMPORTS
import "./_app.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" children={[<About />]} />
        <Route exact path="/projects/:id" children={<WorkPage />} />
        <Route exact path="/blog/:id" children={<BlogPage />} />
        <Route exact path="/bio" children={<Resume />} />
        <Route exact path="/blog" children={<Blog />} />
        <Route exact path="/sandbox" children={<Sandbox />} />
        <Route path="/" children={<Error404 />} />
      </Switch>
    </div>
  );
}

export default App;