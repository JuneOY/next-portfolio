"use client";

import { useEffect, useState } from "react";
import "../public/style/page.css";
import { SnakeGame } from "./components";

export default function Home() {
  useEffect(() => {
    if (window.innerWidth <= 1024) setMobile(true);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isMobile, setMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth <= 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }
  return (
    <main id="hello">
      {/* gradients  */}
      <div className="css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green"></div>

      <section className="hero">
        <div className="head">
          <span> Hi all, I am </span>
          <h1>PB ouYang</h1>
          <span className="diple flex">
            {">"}&nbsp;
            <h2 className="line-1 anim-typewriter max-w-fit">
              Front-end developer
            </h2>
          </span>
        </div>

        <div id="info">
          <span className="action"> {"// complete the game to continue"} </span>
          <span className={isMobile ? "hide" : ""}>
            {"// you can also see it on my Github page"}
          </span>
          <span className={!isMobile ? "hide" : ""}>
            {"// find my profile on Github:"}
          </span>
          <p className="code">
            <span className="identifier"> const </span>
            <span className="variable-name"> githubLink </span>
            <span className="operator"> = </span>
            <a className="string" href={"https://github.com/"}>
              https://github.com/username
            </a>
          </p>
        </div>
      </section>
      {!isMobile && (
        <section data-aos="fade-up" className="game">
          <SnakeGame />
        </section>
      )}
    </main>
  );
}
