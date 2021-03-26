import React from "react";
import { FlipCard } from "./FlipCard";
import { Grid } from "./Grid";
import { MouseParallax } from "./MouseParallax";
import { PerspectiveCard } from "./PerspectiveCard";
import { ToggleCard } from "./ToggleCard";
import "./_sandbox.scss";

export const Sandbox = () => {
  return (
    <div className="sandbox">
      <section>
        <ToggleCard />
        <PerspectiveCard />
        <FlipCard />
      </section>
      <section>
        <MouseParallax />
      </section>
      <section>
      </section>
    </div>
  );
};
