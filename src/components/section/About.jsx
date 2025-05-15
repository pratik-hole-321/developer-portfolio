import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import SkillsCard from "../SkillsCard";
import EducationCard from "../EducationCard";
import WorkExp from "../WorkExp";
const About = () => {
  const frontSkills = ["React", "Redux", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Python", "MongoDB"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 
        bg-gradient-to-r from-blue-500 to-cyan-400 
        bg-clip-text text-transparent text-center"
          >
            About Me
          </h2>
          <div
            className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="">
              <SkillsCard />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div
              className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <EducationCard />
            </div>
            <div
              className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <WorkExp />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
