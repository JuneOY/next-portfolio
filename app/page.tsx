import { readFileSync } from "fs";
import path from "path";
import "../public/style/page.css";

async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/json", "developer.json");
  const jsonData = readFileSync(filePath, "utf8");
  const config = JSON.parse(jsonData);

  return config;
}

export default async function Home() {
  const config = await getStaticProps();

  return (
    <main id="hello">
      {/* gradients  */}
      <div className="css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green"></div>

      <section className="hero">
        <div className="head">
          <span> Hi all, I am </span>
          <h1>{config.name}</h1>
          <span className="diple flex">
            {">"}&nbsp;
            <h2 className="line-1 anim-typewriter max-w-fit">{config.role}</h2>
          </span>
        </div>

        <div id="info">
          <span className="action"> {"// complete the game to continue"} </span>
          <span className="{ hide: isMobile }">
            {"// you can also see it on my Github page"}
          </span>
          <span className="{ hide: !isMobile }">
            {"// find my profile on Github:"}
          </span>
          <p className="code">
            <span className="identifier"> const </span>
            <span className="variable-name"> githubLink </span>
            <span className="operator"> = </span>
            <a
              className="string"
              href={"https://github.com/" + config.contacts.social.github.user}
            >
              https://github.com/
              {config.contacts.social.github.user}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
