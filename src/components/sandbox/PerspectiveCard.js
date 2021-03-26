import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

export const PerspectiveCard = () => {

  const calc = (x,y) => [
    -(y - window.innerHeight / 2) /20,
    (x - window.innerWidth / 2) / 20,
    1.1
  ]

  const trans = (a, b, c) => `
    perspective(600px) 
    rotateX(${a}deg)
    rotateY(${b}deg)
    scale(${c})
  `
  
  const [props, set] = useSpring(() => {
    
    return(
      {
        abc: [0,0,1],
        config: {
          mass: 5,
          tension: 350,
          friction: 40
        }
      }
    )
  });

  return (
      <animated.div 
        className="perspective_card" 
        onMouseMove={({clientX: a, clientY: b}) => set({abc: calc(a,b)})}
        onMouseLeave={()=> set({abc: [0,0,1]})}
        style={{ transform: props.abc.interpolate(trans)}} />
  );
};
