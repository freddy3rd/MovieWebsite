import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGripHorizontal, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex flex-start justify-between bg w-full bg-gradient-to-b from-slate-800 absolute z-50 p-4 px-6">
      <div className="hidden md:block relative">
        {[
          ["Home", "/"],
          ["Genre", "/team"],
          ["Country", "/projects"],
          ["Movie", "/reports"],
          ["TV Show", "/space"],
        ].map(([title, url]) => (
          <Link
            key={url}
            to={url}
            className="px-3 py-2 text-slate-50 font-medium hover:bg-slate-50 hover:text-slate-800"
          >
            {title}
          </Link>
        ))}
      </div>

      <div className="md:hidden ">
        <button onClick={() => setShowNav(!showNav)}>
          <FaGripHorizontal className="text-slate-50 text-2xl" />
        </button>
      </div>

      <motion.div
        initial={{ right: 0 }}
        animate={showNav ? { right: 0 } : { right: "100%" }}
        className={`md:hidde w-full max-w-xl h-screen fixed bg-slate-800 top-0  }`}
      >
        <button className="m-3">
          <FaTimes
            onClick={() => setShowNav(!showNav)}
            className="text-slate-50 text-2xl"
          />
        </button>
        <div className="flex flex-col relative mt-4">
          {[
            ["Home", "/"],
            ["Genre", "/team"],
            ["Country", "/projects"],
            ["Movie", "/reports"],
            ["TV Show", "/space"],
          ].map(([title, url]) => (
            <Link
              key={url}
              to={url}
              onClick={() => setShowNav(!showNav)}
              className="px-3 py-2 text-slate-50 font-medium hover:bg-slate-50 hover:text-slate-800 flex-1"
            >
              {title}
            </Link>
          ))}
        </div>
      </motion.div>

      <div>
        <button className="flex items-center">
          <FaUserCircle className="text-slate-50 text-2xl" />
        </button>
      </div>
    </nav>
  );
}
