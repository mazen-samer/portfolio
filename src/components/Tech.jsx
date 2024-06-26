import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWarpper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-raw flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className=" w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWarpper(Tech, "");
