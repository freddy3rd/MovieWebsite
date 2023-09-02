import LandingPage from "./LandingPage";
import { Route, Routes } from "react-router-dom";

import ContextProvide from "./ContextProvide";
import MovieDetail from "./MovieDetail";

function Home() {
  return (
    // <div className="relative grid md:grid-cols-[600px_1fr]  w-full h-screen bg-gradient-to-t from-slate-800 ">
    <>
      {/* {!bgLoaded && !imageLoaded && (
        <div className="w-full h-full bg-slate-800 absolute top-0 left-0 flex items-center justify-center z-50 animate-pulse">
          <Loader />
        </div>
      )} */}

      <LandingPage />
    </>
  );
}

export default Home;
