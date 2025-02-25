import React, { useState } from "react";

const Blog = () => {
  const [popup, setpopup] = useState(false);
  const [name, setname] = useState("");
  const [title, setitle] = useState("");
  const [suggestion, setsuggestion] = useState("");
  const [blogstore, setblogstore] = useState([]);

  const handlesubmit = () => {
    const data = {
      Name: name,
      Title: title,
      Sugesstion: suggestion,
    };

    setblogstore([data, ...blogstore]);
    setname("");
    setitle("");
    setsuggestion("");
    setpopup(false);
  };

  console.log(blogstore);

  return (
    <div>
      <p className=" text-xl my-10 ">
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
          (2001) mixes psychological thriller with time travel and teen drama.
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
            <div className="w-full rounded-2xl border-2 border-gray-400 h-auto p-10 mb-10">
              <p>{_data.Name}</p>
              <p className="my-5">{_data.Title}</p>
              <p>{_data.Sugesstion}</p>
            </div>
          ))
        : ""}
      <button
        onClick={() => setpopup(true)}
        className="border-2 border-gray-400 rounded-2xl mt-3 p-1.5"
      >
        +Addblog
      </button>
      {popup && (
        <div className="absolute h-screen w-screen flex items-center justify-center bg-black/25 backdrop-blur-sm top-0 left-0 z-50">
          <div className="relative h-[50%] w-[50%] bg-white rounded-2xl p-10">
            <button
              className="absolute -top-10 -right-12"
              onClick={() => setpopup(false)}
            >
              <svg
                className="size-12 text-gray-800 dark:text-white"
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
            <p className="font-Roboto font-bold text-xl">Add blog</p>
            <div className="py-10 flex flex-col gap-5">
              <p className="text-2xl font-Roboto">Name</p>
              <input
                className="border-2 border-gray-300 rounded-xl p-3"
                type="text"
                name="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                id=""
              />
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
              Add blog{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
