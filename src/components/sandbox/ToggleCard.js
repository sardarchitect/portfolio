import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

export const ToggleCard = () => {
  const [toggle, setToggle] = useState(false);
  
  const props = useSpring({
    to: { backgroundColor: toggle ? "black" : "gray" },
    from: {
      backgroundColor: "gray",
    },
    delay: 1000,
    onRest() {
      console.log("onRest");
    },
  });

  return (
    <>
      <animated.div className="toggle_card" style={props} />
      <button onClick={() => setToggle(!toggle)}> Toggle </button>
    </>
  );
};
