import React from "react";
import { skills } from "../data/data"; // Make sure this file exports the correct skills array

const SkillsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
      {skills.map((category) => (
        <div
          key={category.title}
          className="rounded-xl p-6 border border-white/10 bg-white/5 hover:translate-y-1 
          hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
        >
          <h3 className="text-xl font-bold text-blue-400 mb-4">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skillList.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
