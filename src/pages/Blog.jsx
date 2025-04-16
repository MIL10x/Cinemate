import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Blog = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [popup, setpopup] = useState(false);
  const [useridcheck, setuseridcheck] = useState(false);
  const [close, setclose] = useState(false);
  const [title, setitle] = useState("");
  const [suggestion, setsuggestion] = useState("");
  const [blogstore, setblogstore] = useState([]);
  const userid = sessionStorage.getItem("userid");
  useEffect(() => {
    if (userid) {
      setuseridcheck(true);
    } else {
      setuseridcheck(false);
    }
  }, [userid]);

  const handleclose = async (name) => {
    const data = await axios.put(`${BACKEND_URL}/userdata/blogdata/${name}`);

    setclose(!close);
  };

  useEffect(() => {
    async function fetchdata() {
      const getdata = await axios.get(`${BACKEND_URL}/userdata/blogdata`);
      setblogstore(getdata.data);
    }
    fetchdata();
  }, [popup, close]);

  const handlesubmit = async () => {
    const data = await axios.post(`${BACKEND_URL}/userdata/blogdata`, {
      accname: userid,
      heading: title,
      para: suggestion,
    });

    setitle("");
    setsuggestion("");
    setpopup(false);
  };

  const handleacclogin = () => {
    toast.error("please create an account and login");
  };

  return (
    <div className="dark:text-white">
      <p className=" text-xl my-10 dark:text-white ">
        ✨ This is blog Section you can add your thoughts here👇
      </p>
      <div className="w-full rounded-2xl border-2 border-gray-400 h-auto p-10 mb-10">
        <p className="">Hi,I'm Milton</p>
        <p className="my-5">Movies with Mind-Bending Plots</p>
        <p>
          Films like Inception (2010), directed by Christopher Nolan, dive deep
          into the concept of dreams within dreams, while The Matrix (1999), by
          The Wachowskis, explores the idea of simulated reality. Nolan’s
          Memento (2000) tells a gripping story in reverse, adding complexity to
          the narrative of a man suffering from short-term memory loss. Shutter
          Island (2010), directed by Martin Scorsese, blurs reality and illusion
          as two marshals investigate a mental institution, and Donnie Darko
          (2002) mixes psychological thriller with time travel and teen drama.
          Eternal Sunshine of the Spotless Mind (2004) presents a unique love
          story about erasing painful memories, while Interstellar (2014) delves
          into time dilation, black holes, and humanity’s survival. Lastly, The
          Prestige (2006) features two magicians locked in a rivalry, constantly
          twisting the narrative to challenge the viewer's perception of
          reality. These films captivate audiences by pushing the boundaries of
          traditional storytelling, making us question the nature of time,
          memory, and existence.
        </p>
      </div>
      {blogstore.length > 0
        ? blogstore.map((_data) => (
            <div
              key={_data._id}
              className="relative w-full rounded-2xl border-2 border-gray-400 h-auto p-10 mb-10"
            >
              <p>{_data.accname}</p>
              <p className="my-5">{_data.heading}</p>
              <p>{_data.paragraph}</p>
              {useridcheck && userid == _data.accname && (
                <button
                  onClick={() => handleclose(_data._id)}
                  className="absolute top-5 right-5"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))
        : ""}
      {useridcheck ? (
        <button
          onClick={() => setpopup(true)}
          className="border-2 border-gray-400 rounded-2xl mt-3 p-1.5"
        >
          <p>+ Add Blog</p>
        </button>
      ) : (
        <button
          onClick={handleacclogin}
          className="border-2 border-gray-400 rounded-2xl mt-3 p-1.5"
        >
          <p>+ Add Blog</p>
        </button>
      )}

      {popup && (
        <div className="absolute dark:text-black h-screen max-lg:h-[200vh] w-screen flex items-center justify-center bg-black/25 backdrop-blur-sm top-0 left-0 z-50">
          <div className="relative h-[50%] w-[50%] bg-white rounded-2xl max-lg:rounded-none p-10 max-lg:h-[100vh] z-50 max-lg:w-screen max-lg:py-40">
            <button
              className="absolute -top-10 -right-12 max-lg:top-5 max-lg:right-5"
              onClick={() => setpopup(false)}
            >
              <svg
                className="size-12 text-gray-800 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <p className="font-Roboto font-bold text-xl">Add blog</p>
            <div className="py-10 flex flex-col gap-5">
              <p className="text-2xl font-Roboto">Title</p>
              <input
                className="border-2 border-gray-300 rounded-xl p-3"
                type="text"
                name="Title"
                value={title}
                onChange={(e) => setitle(e.target.value)}
                id=""
              />
              <p className="text-2xl font-Roboto">Your thought</p>
              <textarea
                className="border-2 border-gray-300 rounded-xl p-3"
                type="text"
                value={suggestion}
                onChange={(e) => setsuggestion(e.target.value)}
                name="thought"
                id=""
              />
            </div>
            <button
              onClick={handlesubmit}
              className=" text-white bg-blue-500 p-3 rounded-2xl "
            >
              Add Blog
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
