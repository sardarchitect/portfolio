import React from "react";
import "../../../stylesheets/_blog.scss";

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export const Blog = () => {
  let parallax;

  return (
    <div class="blog" id="blog">
      <div className="coming_soon">
        <Parallax pages={2} ref={(ref) => (parallax = ref)}>
          <ParallaxLayer offset={0.3} speed={0}>
            <h1 className="coming_soon_0"> Blog </h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1}>
            <span className="coming_soon_1">Scroll down!</span>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};
