import React from "react";
import { education } from "../data/data";
const EducationCard = () => {
  console.log(education);
  return (
    <>
      <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {education.map((edu) => (
          <li className="bg-zinc-700/5 p-4 rounded">
            <strong>
              {edu.degree} - {edu.percentage}
            </strong>
            <div className="text-gray-400">{edu.institution}</div>
            <div className="text-gray-400"> ({edu.year})</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EducationCard;
