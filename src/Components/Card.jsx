import React, { useState } from "react";
import cine from "../assets/cine.jpg";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const image =
    movie.backdrop_path || movie.backdropPath
      ? `https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.backdropPath
        }`
      : cine;

  const splitoverview = movie.overview ? movie.overview.split(" ") : "";
  const spliteddatai =
    splitoverview.length > 50 ? splitoverview.slice(0, 50) : splitoverview;
  const splteddatap = spliteddatai ? spliteddatai.join(" ") : "";
  return (
    <div>
      {movie.title && (
        <Link to={`/movies/${movie.id}`}>
          <div className="w-[30vh] m-5 h-[45vh] max-lg:w-[90%] max-lg:h-[80vh]  text-wrap bg-white rounded-xl shadow-2xl dark:bg-slate-700 dark:text-white">
            <img src={image} alt="" className="rounded-t-xl shadow-xl" />

            <p className="text-xl px-5 py-5 font-bold">
              {movie.original_title || movie.title}
            </p>
            <p className="px-8 text-lg  max-lg:text-[1rem] line-clamp-4 max-lg:line-clamp-3 ">
              {spliteddatai.length > 50
                ? splteddatap + " ...more "
                : movie.overview}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Card;
