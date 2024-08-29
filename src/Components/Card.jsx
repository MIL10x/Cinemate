import React from "react";
import cine from "../assets/cine.jpg";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const image = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    : cine;
  return (
    <div>
      <Link to={`/movies/${movie.id}`}>
        <div className="w-96 m-5 h-[40vh] bg-white rounded-xl shadow-2xl dark:bg-slate-700 dark:text-white">
          <img src={image} alt="" className="rounded-t-xl shadow-xl" />
          <p className="text-xl px-5 py-5 font-bold">{movie.original_title}</p>
          <p className="px-8 ">{movie.overview}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
