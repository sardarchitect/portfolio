import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import "./_footer.scss";

export const Footer = () => {
  
  return (
    <ParallaxLayer offset={2} speed={0.3} style={{ backgroundColor: "rgb(224, 140, 101)" }}>    
    <footer class="Footer">
      <div className="contact__description">
        <p>
        I DO MY BEST WORK WITHIN A COLLABORATIBE TEAM, AND I AM ALWAYS LOOKING 
        TO COLLABORATE WITH ARCHITECTS, AND DESIGNERS.
        </p>
        <p>
          PLEASE FEEL FREE TO CHECK ME OUT ON <a target="_blank" href="https://www.linkedin.com/in/sardarchitect/">LINKEDIN</a>, AND <a target="_blank" href="https://www.instagram.com/sardarchitect/">INSTAGRAM</a>, OR SIMPLY SEND ME AN <a href="mailto: sardarchitect@gmail.com">EMAIL</a>
        </p>
      </div>
      <div className="copyright">
        <p>DESIGNED BY ARVINDER SINGH - 2021</p>
      </div>
    </footer>
    </ParallaxLayer>
  );
};