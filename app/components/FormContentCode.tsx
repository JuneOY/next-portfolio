import "../../public/style/FormContentCode.css";
import { useEffect, useState } from "react";

type Props = {
  name: string;
  email: string;
  message: string;
};

export default function FormContentCode({ name, email, message }: Props) {
  const [lines, setLines] = useState(0);

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

  useEffect(() => {
    updateLines();
    window.addEventListener("resize", updateLines);
    window.addEventListener("click", updateLines);
    window.addEventListener("input", updateLines);

    return () => {
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("click", updateLines);
      window.removeEventListener("input", updateLines);
    };
  }, []);

  const forLines = () => {
    const elements = [];
    for (let i = 1; i < lines; i++) {
      elements.push(
        <div className="grid grid-cols-2 justify-end" key={i}>
          <span className="col-span-1 mr-3">{i}</span>
        </div>
      );
    }
    return <>{elements}</>;
  };
  return (
    <div className="code-container flex font-fira_retina text-menu-text">
      <div className="line-numbers lg:flex flex-col w-16 hidden">
        {/* <!-- line numbers and asteriscs --> */}
        {forLines()}
      </div>
      <div className="font-fira_retina text-white text-container">
        <p>
          <span className="tag"> const </span>
          <span className="tag-name"> button </span>=
          <span className="tag-name">
            &nbsp;document.querySelector
            <span className="text-menu-text">
              (<span className="text-codeline-link"> {"'#sendBtn'"} </span>
              );
            </span>
          </span>
        </p>
        <br />
        <p className="text-menu-text">
          <span className="tag"> const </span>
          <span className="tag-name"> message </span>
          {"= {"}
          <br />
          &nbsp;&nbsp;
          <span id="name" className="tag-name">
            {" "}
            name{" "}
          </span>
          :<span className="text-codeline-link">{'"'}</span>
          <span id="name-value" className="text-codeline-link">
            {name}
          </span>
          <span className="text-codeline-link">{'"'}</span>
          , <br />
          &nbsp;&nbsp;
          <span id="email" className="tag-name">
            {" "}
            email{" "}
          </span>
          :<span className="text-codeline-link">{'"'}</span>
          <span id="email-value" className="text-codeline-link">
            {email}
          </span>
          <span className="text-codeline-link">{'"'}</span>
          , <br />
          &nbsp;&nbsp;
          <span id="message" className="tag-name">
            {" "}
            message{" "}
          </span>
          :<span className="text-codeline-link">{'"'}</span>
          <span id="message-value" className="text-codeline-link">
            {message}
          </span>
          <span className="text-codeline-link">{'"'}</span>
          , <br />
          &nbsp;&nbsp; date:
          <span className="text-codeline-link">
            {" "}
            {'"'}
            {new Date().toDateString()}
            {'"'}{" "}
          </span>
          <br />
          {"}"}
        </p>
        <br />
        <p>
          <span className="tag-name">
            button.addEventListener
            <span className="text-menu-text">
              {"("}
              <span className="text-codeline-link"> {"'click'"} </span>
              {"), ()"}
              <span className="tag"> {"=>"} </span>
              {"{"}
              <br />
            </span>
            &nbsp;&nbsp;form.send
            <span className="text-menu-text">{"("}</span>
            message
            <span className="text-menu-text">
              {");"} <br />
              {"})"}
            </span>
          </span>
        </p>
      </div>
    </div>
  );
}
