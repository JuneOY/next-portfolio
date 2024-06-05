"use client";

import "../../public/style/GistSnippet.css";
import Image from "next/image";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect, useRef } from "react";

hljs.registerLanguage("javascript", javascript);

const gist = {
  url: "https://api.github.com/gists/83861a67e377633ee8368df01ee3a355",
  forks_url:
    "https://api.github.com/gists/83861a67e377633ee8368df01ee3a355/forks",
  commits_url:
    "https://api.github.com/gists/83861a67e377633ee8368df01ee3a355/commits",
  id: "83861a67e377633ee8368df01ee3a355",
  node_id: "G_kwDOBRS9wdoAIDgzODYxYTY3ZTM3NzYzM2VlODM2OGRmMDFlZTNhMzU1",
  git_pull_url: "https://gist.github.com/83861a67e377633ee8368df01ee3a355.git",
  git_push_url: "https://gist.github.com/83861a67e377633ee8368df01ee3a355.git",
  html_url:
    "https://gist.github.com/alexdeploy/83861a67e377633ee8368df01ee3a355",
  files: {
    "example1.js": {
      filename: "example1.js",
      type: "text/javascript",
      language: "JavaScript",
      raw_url:
        "https://gist.githubusercontent.com/alexdeploy/83861a67e377633ee8368df01ee3a355/raw/fd873b1446c9e88572e5f3eed98a14000a2a19b5/example1.js",
      size: 283,
      truncated: false,
      content:
        "function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n  const value: T = parseModel(chunk._response, chunk._value);\n  const initializedChunk: InitializedChunk<T> = (chunk: any);\n  initializedChunk._status = INITIALIZED;\n  initializedChunk._value = value;\n  return value;\n}",
    },
  },
  public: false,
  created_at: "2023-02-05T16:27:35Z",
  updated_at: "2023-02-05T22:36:29Z",
  description: "Code template for portolio",
  comments: 2,
  user: null,
  comments_url:
    "https://api.github.com/gists/83861a67e377633ee8368df01ee3a355/comments",
  owner: {
    login: "JuneOY",
    id: 85245377,
    node_id: "MDQ6VXNlcjg1MjQ1Mzc3",
    avatar_url: "https://avatars.githubusercontent.com/u/85245377?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/alexdeploy",
    html_url: "https://github.com/alexdeploy",
    followers_url: "https://api.github.com/users/alexdeploy/followers",
    following_url:
      "https://api.github.com/users/alexdeploy/following{/other_user}",
    gists_url: "https://api.github.com/users/alexdeploy/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/alexdeploy/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/alexdeploy/subscriptions",
    organizations_url: "https://api.github.com/users/alexdeploy/orgs",
    repos_url: "https://api.github.com/users/alexdeploy/repos",
    events_url: "https://api.github.com/users/alexdeploy/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/alexdeploy/received_events",
    type: "User",
    site_admin: false,
  },
  forks: [],
  history: [
    {
      user: {
        login: "JuneOY",
        id: 85245377,
        node_id: "MDQ6VXNlcjg1MjQ1Mzc3",
        avatar_url: "https://avatars.githubusercontent.com/u/85245377?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/alexdeploy",
        html_url: "https://github.com/alexdeploy",
        followers_url: "https://api.github.com/users/alexdeploy/followers",
        following_url:
          "https://api.github.com/users/alexdeploy/following{/other_user}",
        gists_url: "https://api.github.com/users/alexdeploy/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/alexdeploy/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/alexdeploy/subscriptions",
        organizations_url: "https://api.github.com/users/alexdeploy/orgs",
        repos_url: "https://api.github.com/users/alexdeploy/repos",
        events_url: "https://api.github.com/users/alexdeploy/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/alexdeploy/received_events",
        type: "User",
        site_admin: false,
      },
      version: "6eea340eb797e0034bb4c538edd4233679c448d1",
      committed_at: "2023-02-05T16:27:35Z",
      change_status: {
        total: 7,
        additions: 7,
        deletions: 0,
      },
      url: "https://api.github.com/gists/83861a67e377633ee8368df01ee3a355/6eea340eb797e0034bb4c538edd4233679c448d1",
    },
  ],
  truncated: false,
};

const setMonths = (date: string) => {
  let now = new Date();
  let gistDate = new Date(date);
  let diff = now.getTime() - gistDate.getTime();
  let days = Math.floor(diff / (1000 * 3600 * 24));
  let months = Math.floor(days / 30);
  return months;
};

const setSnippet = () => {
  let snippet = Object.values(gist.files)[0]?.content; // Object.values(gist.files)[0].filename.content
  return snippet;
};

const showComment = (id: string) => {
  let comment = document.getElementById("comment" + id) as HTMLElement;
  comment.classList.toggle("hidden");
};

export default function GistSnippet() {
  const codeRef = useRef(null);

  useEffect(() => {
    console.log(hljs);
  }, []);

  return (
    <div className="gist mb-5" v-if="dataFetched">
      {/* <!-- head info --> */}
      <div className="flex justify-between my-2">
        <div className="flex">
          {/* <!-- avatar --> */}
          <Image
            src="/images/20240517091718.png"
            width={9}
            height={9}
            alt=""
            className="w-8 h-8 rounded-full mr-2"
          />

          {/* <!-- username & gist date info --> */}
          <div className="flex flex-col">
            <a
              id="username"
              href={"https://github.com/" + gist.owner.login}
              target="_blank"
              className="font-fira_bold text-purple-text text-xs pb-1 hover:cursor-pointer"
            >
              @{gist.owner.login}
            </a>
            <p className="font-fira_retina text-xs text-menu-text">
              Created {setMonths(gist.created_at)} months ago
            </p>
          </div>
        </div>

        {/* <!-- details and stars --> */}
        <div className="flex text-menu-text font-fira_retina text-xs justify-self-end lg:mx-2">
          <div className="flex lg:mx-2 hover:cursor-pointer hover:text-white">
            <Image
              src="/icons/gist/comments.svg"
              width={9}
              height={9}
              alt=""
              className="w-4 h-4 mr-2"
            />
            <span onClick={() => showComment(gist.id)}>details</span>
          </div>
          <div className="hidden lg:flex hover:cursor-pointer hover:text-white">
            <Image
              src="/icons/gist/star.svg"
              width={9}
              height={9}
              alt=""
              className="w-4 h-4 mx-2"
            />
            <span className="">stars</span>
          </div>
        </div>
      </div>

      <pre>
        <code ref={codeRef}>{gist.files["example1.js"].content}</code>
      </pre>
      <div
        id={"comment" + gist.id}
        className="flex hidden justify-between text-menu-text font-fira_retina mt-4 pt-4 border-top"
      >
        {/* <p id="comment" v-if="comment" className="w-5/6">
          {comment}
        </p> */}
        {/* <p v-else className="w-5/6">
          No comments.
        </p> */}
        <Image
          src="/icons/close.svg"
          width={9}
          height={9}
          alt=""
          className="hover:cursor-pointer"
          onClick={() => showComment(gist.id)}
        />
      </div>
    </div>
  );
}
