// MODULE IMPORTS
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
// STYLE IMPORTS
import "./_footer.scss";

export const Footer = () => {
  
  return (
    <ParallaxLayer offset={3} speed={0.1} className="Footer">    
      <div className="contact__description">
        <p>
        I DO MY BEST WORK WHEN COLLABORATING WITH LIKE-MINDED TEAMS, 
        AND I AM ALWAYS LOOKING FOR NEW PROJECTS!
        </p>
        <p>
          PLEASE FEEL FREE TO CHECK ME OUT ON <a target="_blank" href="https://www.linkedin.com/in/sardarchitect/">LINKEDIN</a>, AND <a target="_blank" href="https://www.instagram.com/sardarchitect/">INSTAGRAM</a>, OR SIMPLY SEND ME AN <a href="mailto: sardarchitect@gmail.com">EMAIL</a>
        </p>
        <p>
          YOU COULD ALSO FIND ME ON <a target="_blank" href="https://github.com/sardarchitect">GITHUB</a>
        </p>
      </div>
      <div className="copyright">
        <p>ARVINDER SINGH - 2021</p>
      </div>
    </ParallaxLayer>
  );
};