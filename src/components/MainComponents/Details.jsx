import React from "react";
import { List } from "../images";
import { FaPlay } from "react-icons/fa";

function Details(props) {
  const { id } = props;
  return (
    <>
      {List.map((data) => {
        if (data.id === id) {
          return (
            <div key={data.id} className="md:p-8 p-4 md:self-end self-center ">
              <h1 className="font-bold md:text-6xl text-6xl mb-4 text-slate-50 ff-monsterrate relative md:w-3/5">
                {data.title}
                {data.genre === "Drama" && (
                  <div className="absolute -top-6 left-1 text-slate-200 text-sm flex gap-2">
                    <span>{data.episode}</span>
                  </div>
                )}
              </h1>
              <div
                id="details"
                className="max-h-40 py-3 overflow-y-auto ff-Open-sans md:w-3/5 "
              >
                <p className="text-sm text-slate-50 mr-4 leading-6">
                  {data.detail}
                </p>
              </div>
              <button className="text-sm text-slate-50 font-semibold rounded-full border-2 border-emerald-600 hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500 px-8 py-2 flex gap-2 items-center mt-3">
                <FaPlay /> Watch Now
              </button>
            </div>
          );
        }
      })}
    </>
  );
}

export default Details;
