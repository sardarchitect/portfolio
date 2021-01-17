import React, { useEffect, useState } from "react";
export const About = () => {
  const [textIdx, setTextIdx] = useState(0);
  const text = ["ARCHITECTURE", "ART", "TECHNOLOGY"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIdx === 2) {
        setTextIdx(0);
      } else {
        setTextIdx(textIdx + 1);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [textIdx]);

  return (
    <div className="About" style={{textAlign: "center"}}>
        <h2>{text[textIdx]}</h2>
    </div>
  );
};
