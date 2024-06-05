"use client";

import Image from "next/image";
import "../../public/style/contact-me.css";
import ContactForm from "../components/ContactForm";
import FormContentCode from "../components/FormContentCode";
import { useState } from "react";

const source = [
  {
    title: "YouTube channel",
    url: "https://www.youtube.com/",
    user: "username",
  },
  {
    title: "GuruShots profile",
    url: "https://gurushots.com/",
    user: "username",
  },
  {
    title: "Instagram account",
    url: "https://instagram.com/",
    user: "username",
  },
  {
    title: "Twitch profile",
    url: "https://twitch.com/",
    user: "username",
  },
];

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const open = (elementId: string) => {
    const element = document.getElementById(elementId) as HTMLElement;
    const arrow = element.querySelector(".arrow");
    const links = element.querySelector("#links");

    // if (links.style.display === "block") {
    //   links.style.display = "none";
    //   arrow.style.transform = "rotate(0deg)";
    // } else {
    //   links.style.display = "block";
    //   arrow.style.transform = "rotate(90deg)";
    // }
  };

  return (
    <main id="contact-me" className="page">
      <div id="mobile-page-title">
        <h2>_contact-me</h2>
      </div>

      <div id="page-menu" className="w-full h-full flex flex-col border-right">
        {/* <!-- contacts --> */}
        <div id="contacts" className="submenu">
          <div className="title" onClick={() => open("contacts")}>
            <Image
              className="arrow"
              src="/icons/arrow.svg"
              width={8}
              height={8}
              alt=""
            />
            <h3>contacts</h3>
          </div>
          <div id="links">
            <div className="link">
              <Image src="/icons/email.svg" width={16} height={16} alt="" />
              <a
                href="/"
                className="font-fira_retina text-menu-text hover:text-white"
              >
                ou1192158284@163.com
              </a>
            </div>
            <div className="link">
              <Image src="/icons/phone.svg" width={16} height={16} alt="" />
              <a
                href="/"
                className="font-fira_retina text-menu-text hover:text-white"
              >
                +86-13781263708
              </a>
            </div>
          </div>
        </div>

        {/*  <!-- find me also in --> */}
        <div id="find-me-in" className="submenu border-top">
          <div className="title" onClick={() => open("find-me-in")}>
            <Image
              className="arrow"
              src="/icons/arrow.svg"
              width={8}
              height={8}
              alt=""
            />
            <h3>find-me-also-in</h3>
          </div>
          <div id="links">
            {source.map((item) => (
              <div key={item.title} className="link">
                <Image src="/icons/link.svg" width={16} height={16} alt="" />
                <a
                  href={item.url + item.user}
                  className="font-fira_retina text-menu-text hover:text-white"
                  target="_blank"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* <!-- windows tab --> */}
        <div className="tab-height w-full hidden lg:flex border-right border-bot items-center">
          <div className="flex items-center border-right h-full">
            <p className="font-fira_regular text-menu-text text-sm px-3">
              contacts
            </p>
            <Image
              src="/icons/close.svg"
              alt=""
              width={0}
              height={0}
              style={{ height: "auto", width: "100%" }}
              className="m-3"
            />
          </div>
        </div>

        {/* <!-- main --> */}
        <div className="flex lg:grid lg:grid-cols-2 h-full w-full">
          <div
            id="left"
            className="h-full w-full flex flex-col border-right items-center"
          >
            <ContactForm name={name} email={email} message={message} />
          </div>
          <div id="right" className="h-full w-full hidden lg:flex">
            <div className="form-content">
              <FormContentCode name={name} email={email} message={message} />
            </div>
            {/* <!-- scroll bar --> */}
            <div
              id="scroll-bar"
              className="h-full border-left flex justify-center py-1"
            >
              <div id="scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
