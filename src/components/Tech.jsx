import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    // <div className='flex flex-row flex-wrap justify-center gap-10'>
    //   {technologies.map((technology) => (
    //     <div className='w-28 h-28' key={technology.name}>
    //       <BallCanvas icon={technology.icon} />
    //     </div>
    //   ))}
    // </div>

    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 flex items-center justify-center"
          key={technology.name}
        >
          <SimpleIcon icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>
  );
};
// Example of SimpleIcon component
const SimpleIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center">
    <img src={icon} alt={name} className="w-16 h-16 object-contain" />
    <p className="mt-2 text-center text-sm font-medium">{name}</p>
  </div>
);
export default SectionWrapper(Tech, "");
