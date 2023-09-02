import React, { useContext, useState } from "react";
import { Context } from "./MainComponents/context/Context";
import { List } from "./images";
import { FaPlay, FaBookmark } from "react-icons/fa";

function MovieDetail() {
  const { id } = useContext(Context);

  return (
    <>
      <div className="w-full h-full bg-slate-800 grid p-4">
        {List.map((data) => {
          if (data.id === id) {
            return (
              <div
                key={data.id}
                className="grid md:grid-cols-[1fr_40%] content-center p-4 mt-6"
              >
                <div key={data.id} className=" bg-slate-800 self-center">
                  <h1 className="font-bold md:text-6xl text-6xl mb-4 text-slate-50 ff-monsterrate relative ">
                    {data.title}
                  </h1>
                  <div id="details" className=" ff-Open-sans ">
                    <p className="text-sm text-slate-50 mr-4 leading-6 text-justify ">
                      {data.detail}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col sticky top-5">
                    <img
                      key={data.title}
                      className="h-[400px] self-center"
                      src={`.././src/assets/${data.image}`}
                    />
                    <div className="px-4">
                      <div className="flex gap-2">
                        <button className="text-sm flex-1 text-slate-50 font-semibold border-2 border-emerald-600 hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500 px-8 py-2 flex gap-2 items-center justify-center mt-3">
                          <FaPlay /> Watch Now
                        </button>
                        <button className="text-sm flex-1 text-slate-50 font-semibold border-2 border-emerald-600  hover:shadow-2xl hover:shadow-emerald-500 px-8 py-2 flex gap-2 items-center justify-center mt-3">
                          <FaBookmark /> Save Now
                        </button>
                      </div>
                      <p className=" bg-yellow-400 text-slate-950 text-center p-2 mt-2 font-bold">
                        Duration: {data.duration}
                      </p>
                      <p className=" bg-yellow-400 text-slate-950 text-center p-2 mt-2">
                        <span>
                          {data.genre.map((data) => (
                            <b> {data.concat(",")} </b>
                          ))}
                        </span>
                      </p>
                      <div className="flex gap-2 mt-2 text-slate-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default MovieDetail;
