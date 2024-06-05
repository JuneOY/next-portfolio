"use client";

import "../../public/style/ProjectCard.css";
import Image from "next/image";

interface Projects {
  id: number;
  title: string;
  description: string;
  img: string;
  tech: string[];
  url: string;
}

export default function ProjectCard({
  key,
  index,
  project,
}: {
  key: number;
  index: number;
  project: Projects;
}) {
  return (
    <div id="project" key={key} className="lg:mx-5">
      <span className="flex text-sm my-3">
        {index == null ? (
          <h3 className="text-purplefy font-fira_bold mr-3">
            Project {key + 1}
          </h3>
        ) : (
          <h3 className="text-purplefy font-fira_bold mr-3">
            Project {index + 1}
          </h3>
        )}
        <h4 className="font-fira_retina text-menu-text">
          {" "}
          {"//"} {project.title}
        </h4>
      </span>

      <div id="project-card" className="flex flex-col">
        <div id="window">
          <div className="absolute flex right-3 top-3">
            {project.tech.map((tech) => (
              <Image
                key={tech}
                src={"/icons/techs/filled/" + tech + ".svg"}
                width={24}
                height={24}
                alt=""
                className="w-6 h-6 mx-1 hover:opacity-75"
              />
            ))}
          </div>
          <Image
            id="showcase"
            src={project.img}
            width={0}
            height={0}
            style={{ height: "auto", width: "100%" }}
            alt=""
            className=""
          />
        </div>

        <div className="pb-8 pt-6 px-6 border-top">
          <p className="text-menu-text font-fira_retina text-sm mb-5">
            {project.description}
          </p>
          <a
            id="view-button"
            href={project.url}
            target="_blank"
            className="text-white font-fira_retina py-2 px-4 w-fit text-xs rounded-lg"
          >
            view-project
          </a>
        </div>
      </div>
    </div>
  );
}
