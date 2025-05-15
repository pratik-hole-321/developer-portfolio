import React from "react";
import { experience } from "../data/data";
const WorkExp = () => {
  console.log("Exp -> ", experience);
  return (
    <>
      <div className="space-y-4 text-gray-300">
        {experience.map((exp) => (
          <div>
            <h4 className="font-semibold">{exp.position}</h4>
            <h6 className="text-gray-400 py-0.5 font-normal">
              {exp.company} ({exp.duration})
            </h6>
            <ul className="list-disc ml-3 py-1.5">
              {exp.responsibilities.map((resp) => (
                <li className="py-1 text-gray-400">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkExp;
