import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

export const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

   const {transform} = useSpring({
     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
     config: {
       mass: 5,
       tension: 500,
       friction: 80
     }
   })

   const {opacity} = useSpring({
    opacity: flipped ? 1 : 0,
  })

  return (
    <animated.div onClick={() => setFlipped(!flipped)}>
      <animated.div className="flipCard back" style={{ transform, opacity: opacity.interpolate(o => 1 - o) }}>
        <p>Click Me</p>
      </animated.div>
      <animated.div className="flipCard front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        <p>Click Me</p>
      </animated.div>
    </animated.div>
  );
};
