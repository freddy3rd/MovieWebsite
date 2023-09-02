import React, { useCallback, useContext, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaPlayCircle } from "react-icons/fa";

import { flushSync } from "react-dom";
import { List } from "../../images";
import "../../stylesheet/opacity.css";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
const TWEEN_FACTOR = 3;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const Popular = (props) => {
  const { setLoaded, setId } = useContext(Context);
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);

      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <>
      <div className="embla ">
        <div className="flex justify-between items-center text-slate-50 font-bold ff-monsterrate">
          <h1 className="text-4xl  py-3 genre relative ml-2">Popular</h1>
          <a href="#" className="hover:text-emerald-300 text-sm">
            See more
          </a>
        </div>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container ">
            {List.map((data, index) => {
              if (data.status === "Popular") {
                return (
                  <div
                    className="embla__slide shadow-lg relative  "
                    key={data.title}
                  >
                    <FaPlayCircle
                      className=" text-2xl text-emerald-600 absolute top-[50%] left-[45%] -translate-[50%] "
                      id="playButton"
                    />
                    <span className="absolute top-1 right-1 text-slate-50 bg-emerald-800 px-2 py-1 rounded-md shadow-md">
                      {data.Quality}
                    </span>
                    <Link to="/Details">
                      <img
                        // onLoad={}
                        className=" embla__slide__img w-md h-40 hover:cursor-pointer"
                        onClick={() => setId(data.id)}
                        src={`.././src/assets/${data.image}`}
                      />
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
