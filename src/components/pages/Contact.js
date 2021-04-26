import React from "react";
import "./_Contact.scss";

export const Contact = () => {
  return (
    <div className="Contact">
      <h1>CONTACT</h1>
      <div className="Contact__info">
        <p>+1 305.457.9897</p>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sardarchitect/"
          rel="noreferrer"
        >
          LINKEDIN
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/sardarchitect/"
          rel="noreferrer"
        >
          INSTAGRAM
        </a>
        <a href="mailto: sardarchitect@gmail.com">SARDARCHITECT@GMAIL.COM</a>
      </div>
    </div>
  );
};
