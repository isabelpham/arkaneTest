import React, { useState } from "react";

export default function Navbar() {
  const [isCollapsed, setCollapse] = useState(true);
  let styleChoice = isCollapsed
    ? "w-full lg:flex lg:w-auto sm:hidden"
    : "w-full lg:flex lg:w-auto";

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <span className="font-semibold text-xl">BOH</span>
        <button
          className="block lg:hidden flex items-center px-3 py-2 border rounded hover:text-white hover:border-white"
          onClick={() => setCollapse(!isCollapsed)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div className={styleChoice}>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:underline mr-4"
          >
            Events
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:underline mr-4"
          >
            Tickets
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:underline"
          >
            About
          </a>
        </div>
      </nav>
    </>
  );
}
