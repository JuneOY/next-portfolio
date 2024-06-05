"use client";

import Image from "next/image";
import "../../public/style/projects.css";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
interface Projects {
  id: number;
  title: string;
  description: string;
  img: string;
  tech: string[];
  url: string;
}

const techs = ["React", "HTML", "CSS", "Vue", "Angular", "Gatsby", "Flutter"];

const projects: Projects[] = [
  {
    id: 1,
    title: "UI Animations",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    img: "/images/projects/ui-animations2.png",
    tech: ["Flutter"],
    url: "https://github.com/",
  },
  {
    id: 2,
    title: "AI Resources",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    img: "/images/projects/ai-resources.png",
    tech: ["Gatsby"],
    url: "https://github.com/",
  },
  {
    id: 3,
    title: "Worldmap",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    img: "/images/projects/worldmap.png",
    tech: ["Angular"],
    url: "https://github.com/",
  },
  {
    id: 4,
    title: "UI Animations",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    img: "/images/projects/ui-animations.png",
    tech: ["React"],
    url: "https://github.com/",
  },
  {
    id: 5,
    title: "Tetris Game",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    img: "/images/projects/tetris-game.png",
    tech: ["React"],
    url: "https://github.com/",
  },
  {
    id: 6,
    title: "Ethereum",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    img: "/images/projects/ethereum.png",
    tech: ["Vue"],
    url: "https://github.com/",
  },
];

export default function Projects() {
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState(["all"]);

  const filterProjects = (project: any) => {};
  return (
    <main className="flex flex-col flex-auto lg:flex-row overflow-hidden">
      <div id="mobile-page-title">
        <h2>_projects</h2>
      </div>

      {/* <!-- section title (mobile) --> */}
      <div
        id="section-content-title"
        className="flex lg:hidden"
        onClick={() => setShowFilters(!showFilters)}
      >
        <Image
          className={showFilters ? "section-arrow rotate-90" : "section-arrow"}
          src="/icons/arrow.svg"
          width={7}
          height={9}
          alt=""
        />
        <span className="font-fira_regular text-white text-sm">projects</span>
      </div>

      {showFilters && (
        <div
          id="filter-menu"
          className="w-full flex-col border-right font-fira_regular text-menu-text lg:flex"
        >
          {/* <!-- title --> */}
          <div
            id="section-content-title"
            className="hidden lg:flex items-center min-w-full"
          >
            <Image
              id="section-arrow-menu"
              src="/icons/arrow.svg"
              width={7}
              height={9}
              alt=""
              className="section-arrow mx-3"
            />
            <p className="font-fira_regular text-white text-sm">projects</p>
          </div>

          {/* <!-- filter menu --> */}
          <nav id="filters" className="w-full flex-col">
            {techs.map((tech) => (
              <div key={tech} className="flex items-center py-2">
                <input
                  type="checkbox"
                  id={tech}
                  onClick={() => filterProjects(tech)}
                />
                <Image
                  id={"icon-tech-" + tech}
                  src={"/icons/techs/" + tech + ".svg"}
                  alt=""
                  width={20}
                  height={20}
                  className="tech-icon w-5 h-5 mx-4"
                />
                <span id={"title-tech-" + tech}>{tech}</span>
              </div>
            ))}
          </nav>
        </div>
      )}

      {/*  <!-- content --> */}
      <div className="flex flex-col w-full overflow-hidden">
        {/* <!-- windows tab --> */}
        <div className="tab-height w-full hidden lg:flex border-bot items-center">
          <div className="flex items-center border-right h-full">
            {filters.map((filter) => (
              <p
                key={filter}
                className="font-fira_regular text-menu-text text-sm px-3"
              >
                {filter};
              </p>
            ))}
            <Image
              src="/icons/close.svg"
              width={16}
              height={16}
              alt=""
              className="m-3"
            />
          </div>
        </div>

        {/*  <!-- windows tab mobile --> */}
        <div id="tab" className="flex lg:hidden items-center">
          <span className="text-white"> {"//"} </span>
          <p className="font-fira_regular text-white text-sm px-3">projects</p>
          <span className="text-menu-text"> / </span>
          {filters.map((filter) => (
            <p
              key={filter}
              className="font-fira_regular text-menu-text text-sm px-3"
            >
              {filter};
            </p>
          ))}
        </div>

        {/* <!-- projects --> */}
        <div
          id="projects-case"
          className="grid grid-cols-1 lg:grid-cols-2 max-w-full h-full overflow-scroll lg:self-center"
        >
          <div
            id="not-found"
            className="hidden flex flex-col font-fira_retina text-menu-text my-5 h-full justify-center items-center"
          >
            <span className="flex justify-center text-4xl pb-3">X__X</span>
            <span className="text-white flex justify-center text-xl">
              No matching projects
            </span>
            <span className="flex justify-center">for these technologies</span>
          </div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
