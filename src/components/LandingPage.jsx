import React, { useState, useEffect, useContext } from "react";

import Parallax from "./MainComponents/Parallax";
import Carousel from "./MainComponents/Carousel";
import Details from "./MainComponents/Details";
import Background from "./MainComponents/Background";
import { List } from "./images";
import { Context } from "./MainComponents/context/Context";
import Loader from "./MainComponents/loader";
import MovingBackground from "./MainComponents/MovingBackground/MovingBackground";

function LandingPage() {
  const { imageLoaded, bgLoaded } = useContext(Context);

  return (
    <>
      {/* {!bgLoaded && !imageLoaded && (
        <div className="w-full h-full bg-slate-800 absolute top-0 left-0 flex items-center justify-center z-50">
          <Loader />
        </div>
      )} */}

      <div className="relative grid md:grid-rows-[550px]  md:grid-cols-1 grid-rows-[450px] w-full h-screen">
        <div className="md:w-full md:h-full relative flex ">
          <MovingBackground />
        </div>
        <div className="w-full h-full bg-gradient-to-t from-slate-800 from-90%  relative flex flex-col ">
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
