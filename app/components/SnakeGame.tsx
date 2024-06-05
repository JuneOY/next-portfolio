"use client";

import Link from "next/link";
import Image from "next/image";
import "../../public/style/SnakeGame.css";

export default function SnakeGame() {
  return (
    <div id="console">
      {/* <!-- bolts --> */}
      <Image
        id="corner"
        src="/icons/console/bolt-up-left.svg"
        alt="bolt-up-left"
        width={22}
        height={22}
        className="absolute top-2 left-2 opacity-70"
      />
      <Image
        id="corner"
        src="/icons/console/bolt-up-left.svg"
        alt="bolt-up-right"
        width={22}
        height={22}
        className="absolute top-2 right-2 opacity-70"
      />
      <Image
        id="corner"
        src="/icons/console/bolt-down-left.svg"
        alt="bolt-down-left"
        width={22}
        height={22}
        className="absolute bottom-2 left-2 opacity-70"
      />
      <Image
        id="corner"
        src="/icons/console/bolt-down-right.svg"
        alt="bolt-down-right"
        width={22}
        height={22}
        className="absolute bottom-2 right-2 opacity-70"
      />

      {/* <!-- Game Screen --> */}
      <div id="game-screen"></div>

      <button id="start-button" className="font-fira_retina">
        start-game
      </button>

      <div id="game-over" className="hidden">
        <span className="font-fira_retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center">
          GAME OVER!
        </span>
        <button className="font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white">
          start-again
        </button>
      </div>

      <div id="congrats" className="hidden">
        <span className="font-fira_retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center">
          WELL DONE!
        </span>
        <button className="font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white">
          play-again
        </button>
      </div>

      <div
        id="console-menu"
        className="h-full flex flex-col items-end justify-between"
      >
        <div>
          <div
            id="instructions"
            className="font-fira_retina text-sm text-white"
          >
            <p>{"// use your keyboard"}</p>
            <p>{"// arrows to play"}</p>

            <div
              id="buttons"
              className="w-full flex flex-col items-center gap-1 pt-5"
            >
              <button id="console-button" className="button-up">
                <Image
                  src="/icons/console/arrow-button.svg"
                  alt="arrow-button"
                  width={9}
                  height={7}
                />
              </button>

              <div className="grid grid-cols-3 gap-1">
                <button id="console-button" className="button-left">
                  <Image
                    src="/icons/console/arrow-button.svg"
                    alt="arrow-button"
                    width={9}
                    height={7}
                    className="-rotate-90"
                  />
                </button>

                <button id="console-button" className="button-down">
                  <Image
                    src="/icons/console/arrow-button.svg"
                    alt="arrow-button"
                    width={9}
                    height={7}
                    className="rotate-180"
                  />
                </button>

                <button id="console-button" className="button-right">
                  <Image
                    src="/icons/console/arrow-button.svg"
                    alt="arrow-button"
                    width={9}
                    height={7}
                    className="rotate-90"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* <!-- score board --> */}
          <div id="score-board" className="w-full flex flex-col pl-5">
            <p className="font-fira_retina text-white pt-5">{"// food left"}</p>

            <div
              id="score"
              className="grid grid-cols-5 gap-5 justify-items-center pt-5 w-fit"
            >
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
            </div>
          </div>
        </div>

        <Link
          id="skip-btn"
          href="/about-me"
          className="font-fira_retina flex hover:bg-white/20"
        >
          skip
        </Link>
      </div>
    </div>
  );
}
