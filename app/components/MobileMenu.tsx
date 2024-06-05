"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "../../public/style/MobileMenu.css";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const routerName = usePathname();

  const goHome = () => {
    const menu = document.getElementById("menu") as HTMLDivElement;

    if (!menu.classList.contains("hidden")) {
      menu.classList.toggle("hidden");
      document.getElementsByTagName("main")[0].style.display = "flex";
      menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    }
  };
  const toggleMobileMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);

    const menu = document.getElementById("menu") as HTMLDivElement;

    menu.classList.toggle("hidden");

    const page = document.getElementsByTagName("main")[0];
    // Hide / show section
    if (page.style.display === "none") {
      page.style.display = "flex";
    } else {
      page.style.display = "none";
    }
  };

  const isActive = (pathname: string) =>
    routerName === pathname ? "active" : "";

  return (
    <div id="mobile-menu" className="w-full z-10 lg:hidden">
      {/* <!-- header --> */}
      <div
        id="mobile-header"
        className="w-full h-16 flex justify-between items-center"
      >
        <Link
          className="text-menu-text font-fira_retina flex h-full items-center mx-5"
          href="/"
          onClick={() => goHome()}
        >
          PB-ouYang
        </Link>
        {!menuOpen ? (
          <Image
            src="/icons/burger.svg"
            width={0}
            height={0}
            alt=""
            onClick={() => toggleMobileMenu()}
            className="w-5 h-5 mx-5 my-auto"
          />
        ) : (
          <Image
            src="/icons/burger-close.svg"
            width={0}
            height={0}
            alt=""
            onClick={() => toggleMobileMenu()}
            className="w-5 h-5 mx-5 my-auto"
          />
        )}
      </div>

      {/* <!-- header --> */}
      <div id="menu" className="bg-mobile-menu-blue z-10 hidden">
        <Link
          id="nav-link-mobile"
          href="/"
          className={isActive("/")}
          onClick={() => toggleMobileMenu()}
        >
          _hello
        </Link>

        <Link
          id="nav-link-mobile"
          href="/about-me"
          className={isActive("/about-me")}
          onClick={() => toggleMobileMenu()}
        >
          _about-me
        </Link>

        <Link
          id="nav-link-mobile"
          href="/projects"
          className={isActive("/projects")}
          onClick={() => toggleMobileMenu()}
        >
          _projects
        </Link>

        <Link
          id="nav-link-mobile"
          href="/contact-me"
          className={isActive("/contact-me")}
          onClick={() => toggleMobileMenu()}
        >
          _contact-me
        </Link>
      </div>
    </div>
  );
}
