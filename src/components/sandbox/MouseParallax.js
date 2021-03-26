import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

export const MouseParallax = () => {
  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerWidth / 2];

  const trans1 = (x, y) => `translate3d(${x / 10}px, ${y / 10}px, 0)`;
  const trans2 = (x, y) => `translate3d(${x / 8}px, ${y / 8}px, 0)`;
  const trans3 = (x, y) => `translate3d(${x / 6}px, ${y / 6}px, 0)`;
  const trans4 = (x, y) => `translate3d(${x / 3.5}px, ${y / 3.5}px, 0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="mouse_parallax_wrapper"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="mouse_parallax_1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className="mouse_parallax_2"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className="mouse_parallax_3"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        className="mouse_parallax_4"
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </div>
  );
};
