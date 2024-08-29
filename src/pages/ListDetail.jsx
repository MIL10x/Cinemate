import { React, useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import cine from "../assets/cine.jpg";
const ListDetail = () => {
  const params = useParams();
  const [data, setdata] = useState({});
  const image = data.backdrop_path
    ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    : cine;
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2M2NzNiZTQyZTI0MzkzM2Q4NTczZGJjYjc5MDY5MyIsIm5iZiI6MTcyNDY2MjQ5Ni4wMTU3NDcsInN1YiI6IjY2Y2MzNGFkZGNhZDc5M2I0MzNkMjgyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqauHPQUDDW131_wbfx8n8oWDoKNiK_TyF34x4Hzing",
      },
    };
    async function fetchapi() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
        options
      );
      const datam = await response.json();
      setdata(datam);
      console.log(datam);
    }
    fetchapi();
  }, [params]);
  console.log(data.id);

  return (
    <>
      <section className="grid gap-20 grid-cols-2 dark:text-white mt-20">
        <img src={image} alt="" />
        <div>
          <p className="font-bold text-3xl">{data.original_title}</p>
          <p className="my-2">{data.overview}</p>
          {data.genres ? (
            <span className="w-full flex  gap-3 my-5">
              {data.genres.map((movie) => (
                <p
                  className="bg-slate-300 p-2 rounded-xl dark:bg-slate-600 "
                  id={movie.id}
                >
                  {movie.name}
                </p>
              ))}
            </span>
          ) : (
            ""
          )}
          {data.homepage ? (
            <p>
              <span className="text-lg font-medium">Link : </span>
              <a
                href={data.homepage}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                {data.homepage}
              </a>
            </p>
          ) : (
            ""
          )}
          <p>
            <span className="text-lg font-medium">Origin country : </span>
            {data.origin_country}
          </p>
          <p>
            <span className="text-lg font-medium">Original Language : </span>
            {data.original_language}
          </p>
          <p>
            <span className="text-lg font-medium">Run time : </span>
            {data.runtime}
          </p>
          <p>
            <span className="text-lg font-medium">Status : </span>
            {data.status}
          </p>
          <p>
            <span className="text-lg font-medium">Release date : </span>
            {data.release_date}
          </p>
          <p>
            <span className="text-lg font-medium">IMDB CODE : </span>
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}`}
              target="_blank"
              rel="noreferrer"
              className=" text-blue-500 "
            >
              {data.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default ListDetail;
