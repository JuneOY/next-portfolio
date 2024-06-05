"use client";

import { useEffect, useState } from "react";
import "../../public/style/CommentedText.css";
import parse from "html-react-parser";

export default function CommentedText({ text }: { text: string }) {
  const [lines, setLines] = useState(0);

  useEffect(() => {
    updateLines();
    window.addEventListener("resize", updateLines);
    window.addEventListener("click", updateLines);
    return () => {
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("click", updateLines);
    };
  }, []);

  const updateLines = () => {
    const textContainer = document.querySelector(
      ".text-container"
    ) as HTMLElement;
    const style = window.getComputedStyle(textContainer);
    const fontSize = parseInt(style.fontSize);
    const lineHeight = parseInt(style.lineHeight);
    const maxHeight = textContainer.offsetHeight;
    setLines(Math.ceil(maxHeight / lineHeight) + 1);
  };

  const forLines = () => {
    const elements = [];
    for (let i = 1; i <= lines; i++) {
      elements.push(
        <div key={i} className="grid grid-cols-2 justify-end">
          <span className="col-span-1 mr-3">{i}</span>
          {i == 1 && (
            <div className="col-span-1 flex justify-center">{"/**"}</div>
          )}
          {i > 1 && i < lines && (
            <div className="col-span-1 flex justify-center">*</div>
          )}
          {i == lines && (
            <div className="col-span-1 flex justify-center pl-2">*/</div>
          )}
        </div>
      );
    }
    return <div>{elements}</div>;
  };

  return (
    <div className="code-container flex font-fira_retina text-menu-text">
      <div className="line-numbers lg:flex flex-col w-32 hidden">
        {/* line numbers and asteriscs */}
        {forLines()}
      </div>

      {/* text */}
      <div className="text-container">
        <p>{parse(text)}</p>
      </div>
    </div>
  );
}
