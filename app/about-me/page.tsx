"use client";

import Image from "next/image";
import { useState } from "react";
import "../../public/style/about-me.css";
import CommentedText from "../components/CommentedText";
import GistSnippet from "../components/GistSnippet";

export interface Root {
  title: string;
  icon: string;
  des: string;
  info: Info[];
}

export interface Info {
  title: string;
  des: string;
  description: string;
}

const config: Root[] = [
  {
    title: "专业常识",
    des: "zycs",
    icon: "/icons/info-professional.svg",
    info: [
      {
        title: "个人简历",
        des: "grjl",
        description: "Over the past 5 years, Lorem ipsum dolor sit amet...",
      },
      {
        title: "个人技能",
        des: "grjn",
        description:
          "<br/>作为一名前端开发人员，Lorem拥有丰富的开发经验...作为一名前端开发人员，Lorem拥有丰富的开发经验...作为一名前端开发人员，Lorem拥有丰富的开发经验...作为一名前端开发人员，Lorem拥有丰富的开发经验...作为一名前端开发人员，Lorem拥有丰富的开发经验...作为一名前端开发人员，Lorem拥有丰富的开发经验...作为一名前端开发人员，Lorem拥有丰富的开发经验...作为一名前端开发人员，Lorem拥有丰富的开发经验...作为一名前端开发人员，Lorem拥有丰富的开发经验...作为一名前端开发人员，Lorem拥有丰富的开发经验...作为一名前端开发人员，Lorem拥有丰富的开发经验...",
      },
      {
        title: "软件技能",
        des: "rjjn",
        description: "我带来了更多的快乐...",
      },
    ],
  },
  {
    title: "个人信息",
    des: "grxx",
    icon: "/icons/info-personal.svg",
    info: [
      {
        title: "bio",
        des: "bio",
        description: "关于我 我有5年的web开发经验...",
      },
      {
        title: "interests",
        des: "interests",
        description:
          "I am constantly learning and lorem ipsum dolor sit amet...",
      },
      {
        title: "education",
        des: "education",
        description: "我一直热衷于学习...",
      },
    ],
  },
  {
    title: "兴趣爱好",
    des: "xqah",
    icon: "/icons/info-hobbies.svg",
    info: [
      {
        title: "sports",
        des: "sports",
        description:
          "I am an avid sports enthusiast and lorem ipsum dolor sit amet...",
      },
      {
        title: "favorite-games",
        des: "favorite-games",
        description:
          "I am a passionate gamer with Lorem ipsum dolor sit amet...",
      },
    ],
  },
];

// 递归查找函数
const findDescriptionByTitle = (data: any, title: string) => {
  for (let item of data) {
    if (item.title === title) {
      return item.description;
    }
    if (item.info) {
      const description: string = findDescriptionByTitle(item.info, title);
      if (description) {
        return description;
      }
    }
  }
  return null;
};

export default function About() {
  const [currentSection, setCurrentSection] = useState("个人信息");
  const [currentFolder, setCurrentFolder] = useState("个人简历");

  const isSectionActive = (sectionTitle: string) => {
    return currentSection === sectionTitle;
  };

  const isActive = (folderTitle: string) => {
    return currentFolder === folderTitle;
  };

  const focusCurrentSection = (section: Root) => () => {
    setCurrentSection(section.title);
    setCurrentFolder(section.info[0].title);
    (
      document.getElementById("folders-" + section.des) as HTMLDivElement
    ).classList.toggle("hidden"); // show folders
    (
      document.getElementById("section-arrow-" + section.des) as HTMLDivElement
    ).classList.toggle("rotate-90"); // rotate arrow
  };

  const focusCurrentFolder = (folder: { title: string }) => () => {
    setCurrentFolder(folder.title);
  };

  return (
    <main id="about-me" className="page">
      <div id="mobile-page-title">
        <h2>_about-me</h2>
      </div>
      <div id="page-menu" className="w-full flex">
        <div id="sections">
          {config.map((section) => (
            <div
              id="section-icon"
              key={section.title}
              className={isSectionActive(section.title) ? "active" : ""}
            >
              <Image
                id={"section-icon-" + section.des}
                src={section.icon}
                alt={section.des + "-section"}
                width={25}
                height={25}
                onClick={focusCurrentSection(section)}
              />
            </div>
          ))}
        </div>

        {/* <!-- focused section content --> */}
        <div
          id="section-content"
          className="hidden lg:block w-full h-full border-right"
        >
          {/* <!-- title --> */}
          <div
            id="section-content-title"
            className="hidden lg:flex items-center min-w-full"
          >
            <Image
              id="section-arrow-menu"
              src="/icons/arrow.svg"
              alt=""
              width={9}
              height={7}
              className="section-arrow mx-3 open"
            />
            <p className="font-fira_regular text-white text-sm">
              {currentSection}
            </p>
          </div>

          {/* <!-- folders --> */}
          <div>
            {config.map(
              (section) =>
                section.title === currentSection &&
                section.info.map((folder, index) => (
                  <div
                    key={folder.des}
                    className="grid grid-cols-2 items-center my-2 font-fira_regular text-menu-text"
                    onClick={focusCurrentFolder(folder)}
                  >
                    <div className="flex col-span-2 hover:text-white hover:cursor-pointer">
                      <Image
                        id="diple"
                        src="/icons/diple.svg"
                        alt=""
                        width={16}
                        height={24}
                        className={isActive(folder.title) ? "open" : ""}
                      />
                      <Image
                        src={"/icons/folder" + (index + 1) + ".svg"}
                        alt=""
                        width={16}
                        height={24}
                        className="mr-3"
                      />
                      <p
                        id={folder.des}
                        className={isActive(folder.title) ? "active" : ""}
                      >
                        {folder.title}
                      </p>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>

        {/*  <!-- mobile --> */}
        <div
          id="section-content"
          className="lg:hidden w-full font-fira_regular"
        >
          {config.map((section) => (
            <div key={section.des}>
              <div
                id="section-content-title"
                className="flex lg:hidden mb-1"
                onClick={focusCurrentSection(section)}
              >
                <Image
                  src="/icons/arrow.svg"
                  id={"section-arrow-" + section.des}
                  width={9}
                  height={7}
                  alt=""
                  className="section-arrow"
                />
                <p className="text-white text-sm">{section.title}</p>
              </div>

              {/* <!-- folders --> */}
              <div id={"folders-" + section.des} className="hidden">
                {config.map(
                  (section) =>
                    section.title === currentSection &&
                    section.info.map((folder, index) => (
                      <div
                        key={folder.des}
                        className="grid grid-cols-2 items-center my-2 font-fira_regular text-menu-text hover:text-white hover:cursor-pointer"
                        onClick={focusCurrentFolder(folder)}
                      >
                        <div className="flex col-span-2">
                          <Image
                            id="diple"
                            src="/icons/diple.svg"
                            alt=""
                            width={16}
                            height={24}
                          />
                          <Image
                            src={"/icons/folder" + (index + 1) + ".svg"}
                            alt=""
                            width={16}
                            height={24}
                            className="mr-3"
                          />
                          <p
                            id={folder.title}
                            className={isActive(folder.title) ? "active" : ""}
                          >
                            {folder.title}
                          </p>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- MENU END --> */}

      {/* content */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 h-full w-full">
        <div id="left" className="w-full flex flex-col border-right">
          {/* windows tab desktop */}
          <div className="tab-height w-full hidden lg:flex border-bot items-center">
            <div className="flex items-center border-right h-full">
              <p className="font-fira_regular text-menu-text text-sm px-3">
                {currentSection}
              </p>
              <Image
                src="/icons/close.svg"
                alt=""
                width={19}
                height={19}
                className="mx-3"
              />
            </div>
          </div>

          {/* <!-- windows tab mobile --> */}
          <div id="tab-mobile" className="flex lg:hidden font-fira_retina">
            <span className="text-white">{"//"} </span>
            <h3 className="text-white px-2">{currentSection}</h3>
            <span className="text-menu-text"> / </span>
            <h3 className="text-menu-text pl-2">{currentFolder}</h3>
          </div>

          {/* <!-- text --> */}
          <div
            id="commented-text"
            className="flex h-full w-full lg:border-right overflow-hidden"
          >
            <div className="w-full h-full ml-5 mr-10 lg:my-5 overflow-scroll">
              <CommentedText
                text={findDescriptionByTitle(config, currentFolder)}
              ></CommentedText>
            </div>
            {/* scroll bar */}
            <div
              id="scroll-bar"
              className="h-full border-left hidden lg:flex justify-center py-1"
            >
              <div id="scroll"></div>
            </div>
          </div>
        </div>

        <div id="right" className="max-w-full flex flex-col">
          {/* <!-- windows tab --> */}
          <div className="tab-height w-full h-full hidden lg:flex border-bot items-center"></div>
          {/* <!-- windows tab mobile --> */}
          <div className="tab-height w-full h-full flex-none lg:hidden items-center"></div>
          <div id="gists-content" className="flex">
            <div
              id="gists"
              className="flex flex-col lg:px-6 lg:py-4 w-full overflow-hidden"
            >
              {/* <!-- title --> */}
              <h3 className="text-white lg:text-menu-text mb-4 text-sm">
                {"// Code snippet showcase:"}
              </h3>
              <div className="flex flex-col overflow-scroll">
                {/* <!-- snippets --> */}
                <GistSnippet data-aos="fade-down" />
                <GistSnippet data-aos="fade-down" />
              </div>
            </div>

            {/* <!-- scroll bar --> */}
            <div
              id="scroll-bar"
              className="h-full border-left hidden lg:flex justify-center py-1"
            >
              <div id="scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
