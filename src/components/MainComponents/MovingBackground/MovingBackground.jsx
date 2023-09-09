import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, PrevButton, NextButton } from "./Navigator";
import { List } from "../../images";
import "../../stylesheet/Autoplay.css";
import Details from "../Details";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovingBackground = ({ setId }) => {
  const autoplayOptions = {
    delay: 5000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ watchDrag: false }, [
    Autoplay(autoplayOptions),
  ]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  // const scrollTo = useCallback(
  //   (index) => emblaApi && emblaApi.scrollTo(index),
  //   [emblaApi]
  // );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());

    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="embla_moving">
        <div className="embla__viewport_moving" ref={emblaRef}>
          <div className="embla__container_moving md:fixed">
            {List.map((data, index) => (
              <React.Fragment key={data.id}>
                <div className="embla__slide_moving relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t from-slate-800 from-10% after:backdrop-blur-md">
                  <div className="md:p-8 p-4 md:self-end self-center absolute top-28 left-0 z-40">
                    <h1 className="font-bold md:text-6xl text-3xl mb-4 text-slate-50 ff-monsterrate relative md:w-3/5">
                      {data.title}
                      {data.genre.includes("Drama") ? (
                        <div className="absolute -top-6 left-1 text-slate-200 text-sm flex gap-2">
                          <span>{data.episode}</span>
                        </div>
                      ) : (
                        <div className=" left-1 text-slate-200 text-sm md:flex items-center gap-3 mt-2">
                          <span className="px-2 bg-emerald-600 rounded-md">
                            {data.Quality}
                          </span>
                          <span className="flex items-center gap-3">
                            Duration:
                            <i>{data.duration}</i>
                          </span>
                          <span className="flex gap-3 items-center w-full flex-wrap">
                            Genre:
                            {data.genre.map((data, index) => (
                              <i key={index}>{data}</i>
                            ))}
                          </span>
                        </div>
                      )}
                    </h1>
                    <div
                      id="details"
                      className="max-h-40 py-3 overflow-y-auto ff-Open-sans md:w-3/5 "
                    >
                      <p className="text-sm text-slate-50 mr-4 leading-6 overflow-ellipsis line-clamp-4">
                        {data.detail}
                      </p>
                    </div>

                    <button className="text-sm text-slate-50 font-semibold rounded-full border-2 border-emerald-600 hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500 px-8 py-2 flex gap-2 items-center mt-3">
                      <FaPlay /> Watch Now
                    </button>
                  </div>

                  <img
                    className="embla__slide__img_moving object-cover"
                    src={`../../src/assets/${data.image}`}
                    alt="Your alt text"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__buttons bottom-0 right-10 z-10 text-slate-50">
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
      {/* 
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div> */}
    </>
  );
};

export default MovingBackground;
