import Link from "next/link";

export default function AppHeader() {
  return (
   <header id="navbar" className="w-full hidden lg:flex flex-col">
    <nav className="w-full flex justify-between border-bot">
      {/* <github-corner url="https://github.com/alexdeploy/developer-portfolio-v2" /> */}
      <div className="flex">
        <Link id="nav-logo" href="/">
          {/* {{ config.dev.logo_name }} */}
        </Link>

        <Link id="nav-link" href="/" className="{ active: isActive('/') }">
          _hello
        </Link>

        <Link id="nav-link" href="/about-me" className="{ active: isActive('/about-me') }">
          _about-me
        </Link>

        <Link id="nav-link" href="/projects" className="{ active: isActive('/projects') }">
          _projects
        </Link>

        <Link id="nav-link" href="/blog" className="{ active: isActive('/blog') }">
          _blog
        </Link>
      </div>

      <div className="flex">
        <div id="nav-link-contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6" />
          </svg>
        </div>

        <div id="nav-link-contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 0 1 7.5 2m11.57 1.5l1.43 1.43L4.93 20.5L3.5 19.07zm-6.18 2.43L11.41 5L9.97 6l.42-1.7L9 3.24l1.75-.12l.58-1.65L12 3.1l1.73.03l-1.35 1.13zm-3.3 3.61l-1.16-.73l-1.12.78l.34-1.32l-1.09-.83l1.36-.09l.45-1.29l.51 1.27l1.36.03l-1.05.87zM19 13.5a5.5 5.5 0 0 1-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15l-.24 3.35zm4.33-2.7l1.15-2.77l2.2 2.54zm1.15-4.96l-1.14-2.78l3.34.24zM9.63 18.93l2.77 1.15l-2.53 2.19z" />
          </svg>
        </div>

        <Link id="nav-link-contact" href="/contact-me" className="{ active: isActive('/contact-me') }">
          _contact-me
        </Link>
      </div>
    </nav>
  </header>
  );
}
