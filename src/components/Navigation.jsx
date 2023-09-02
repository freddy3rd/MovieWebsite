import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { List } from "./images";
export default function Navigation() {
  return (
    <nav className="flex justify-between items-center space-x-4 bg w-full bg-gradient-to-b from-slate-800 absolute z-50 p-4 px-6">
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
      <div>
        <button className="flex items-center ">
          <FaUserCircle className="text-slate-50 text-2xl" />
        </button>
      </div>
    </nav>
  );
}
