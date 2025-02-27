import { React, useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import cine from "../assets/cine.jpg";
// import { useDispatch } from "react-redux";
// import { add } from "../store/favouriteslice";

const ListDetail = () => {
  // const dispatch = useDispatch;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const params = useParams();
  const [data, setdata] = useState({});
  const [videodata, setvideodata] = useState(null);
  const [popup, setpopup] = useState(false);
  const [videokey, setvideokey] = useState("");
  const image = data.backdrop_path
    ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    : cine;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    async function fetchapi() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
        options
      );
      const datam = await response.json();
      setdata(datam);
    }

    if (params.id) {
      fetchapi();
    }
  }, [params.id]);

  useEffect(() => {
    if (!params.id) return;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    async function fetchVideoData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,
        options
      );
      const videodatahit = await response.json();
      setvideodata(videodatahit.results);
    }

    fetchVideoData();
  }, [params.id]);

  if (!data.original_title || !videodata) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="grid gap-20 grid-cols-2 max-lg:grid-cols-1 dark:text-white mt-20">
        <img src={image} alt="" />
        <div>
          {/* <button onClick={() => dispatch(add(data))}>add</button> */}
          <p className="font-bold text-3xl">{data.original_title}</p>
          <p className="my-2">{data.overview}</p>
          {data.genres ? (
            <span className="w-full flex gap-3 my-5">
              {data.genres.map((movie, Index) => (
                <p
                  key={Index}
                  className="bg-slate-300 p-2 rounded-xl dark:bg-slate-600"
                  id={movie.id}
                >
                  {movie.name}
                </p>
              ))}
            </span>
          ) : (
            ""
          )}

          <div className="flex items-center gap-5 my-2">
            <button
              onClick={() => setpopup(true)}
              className=" flex items-center justify-center gap-3 w-fit  bg-blue-500 rounded-xl text-white p-3"
            >
              <svg
                class="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="-1 0 24 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"
                />
              </svg>

              <p className="text-xl ">Videos</p>
            </button>
            {data.homepage ? (
              <p>
                <a
                  href={data.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 rounded-xl text-white p-3 "
                >
                  Link
                </a>
              </p>
            ) : (
              ""
            )}
            <p className="my-3">
              <a
                href={`https://www.imdb.com/title/${data.imdb_id}`}
                target="_blank"
                rel="noreferrer"
                className=" bg-blue-500 rounded-xl text-white p-3  "
              >
                IMDB
              </a>
            </p>
          </div>
          <p>
            <span className="text-lg font-medium">Origin country : </span>
            {data.origin_country}
          </p>
          <p>
            <span className="text-lg font-medium ">Original Language : </span>
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
            <span className="text-lg font-medium ">Release date : </span>
            {data.release_date}
          </p>
          {popup && (
            <div className="absolute bg-black/25 h-screen w-screen z-50 flex justify-center items-center  backdrop-blur-sm top-0 left-0 ">
              <div className="relative bg-black flex max-lg:h-screen max-lg:w-screen justify-center items-center max-lg:flex-col max-lg:justify-normal dark:bg-gray-800 rounded-xl w-[70%] p-3 h-[60%]">
                <button
                  className="absolute -top-10 -right-12 max-lg:relative max-lg:top-0 max-lg:left-0 max-lg:flex max-lg:justify-center max-lg:py-5  max-lg:w-full max-lg:z-50   "
                  onClick={() => setpopup(false)}
                >
                  <p className="text-2xl text-white p-2 border-2 border-white rounded-2xl lg:hidden">
                    close
                  </p>
                  <svg
                    class="size-12 text-gray-800 dark:text-white max-lg:hidden "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div className=" w-[40%] h-[50%]  flex justify-center items-center max-lg:w-full max-lg:h-[50%] my-5 bg-white ">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videokey}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  ></iframe>
                </div>
                <div className="bg-black dark:bg-gray-800 w-fit p-3 h-[50%] max-lg:h-fit max-lg:w-full overflow-hidden overflow-y-scroll  ">
                  <div>
                    {videodata.length > 0 ? (
                      <div>
                        <h3 className="text-white">Videos:</h3>
                        <ul className=" flex flex-col h-full p-3 gap-3 w-fit max-lg:w-full ">
                          {videodata.map((video, index) => (
                            <li
                              key={index}
                              className="bg-blue-400  rounded-xl p-3
                          "
                            >
                              <button
                                className="text-white"
                                onClick={() => setvideokey(video.key)}
                              >
                                {video.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p>No video available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ListDetail;
