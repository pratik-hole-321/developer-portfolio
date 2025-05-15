import React from "react";
import { projects } from "../data/data";
import { github, link } from "../assets/index";
const ProjectCard = () => {
  console.log("Projects - ", projects);

  return (
    <>
      {projects.map((project) => (
        <div
          className="flex flex-col justify-between p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
        >
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/10
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span
              className={`bg-blue-500/10  py-1 px-3 rounded-lg text-sm hover:bg-blue-500/10
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition
                 ${
                   project.status === "Completed"
                     ? "text-green-500/50 "
                     : project.status === "In Progress"
                     ? "text-orange-500/50"
                     : "text-white/50"
                 }
                `}
            >
              {project.status}
            </span>
            {/* <a
              href={project.liveLink}
              className="text-blue-400 hover:text-blue-300 transition-colors my-4"
            >
              View Project ➡
            </a> */}
            <div className="w-40% flex justify-between flex-wrap my-4">
              <a
                href={project.github}
                className="mx-5  hover:text-blue-500 bg-blue-500/10
                 rounded-full hover:bg-blue-500/10
                 shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition"
              >
                <img src={github} className="w-7 h-auto" alt="Github" />
              </a>
              <a
                href={project.liveLink}
                className=" hover:text-blue-500 bg-blue-500/10
                 rounded-full hover:bg-blue-500/10
                 shadow-[0_2px_8px_rgba(59,130,246,0.4)]
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition"
              >
                <img src={link} className="w-7 h-auto" alt="View Project" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
