import logo from "../assets/logo.png";
import dayMode from "../assets/dayMode.png";
import nightMode from "../assets/nightMode.png";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navi = useNavigate();
  const [day, setday] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );
  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(day));
    if (day) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [day]);
  const handlechange = (event) => {
    event.preventDefault();
    const fi = event.target.search.value;
    event.target.reset();
    navi(`/search?q=${fi}`);
  };
  return (
    <>
      <div className="flex justify-around gap-6 p-5 items-center shadow-lg  shadow-slate-300 flex-wrap dark:bg-slate-900">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="" className="size-16" />
          </Link>
        </div>
        <div className="flex gap-7 lg:flex">
          <NavLink to={"/"}>
            <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Home
            </span>
          </NavLink>
          <NavLink to={"movies/pop"}>
            <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Popular
            </span>
          </NavLink>
          <NavLink to={"movies/top"}>
            <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Top Rated
            </span>
          </NavLink>
          <NavLink to={"movies/up"}>
            <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Upcoming
            </span>
          </NavLink>
        </div>
        <div className="flex items-center gap-6">
          <button className="border-2 shadow-slate-300 p-2 rounded-lg">
            <img
              onClick={() => setday(!day)}
              src={day ? nightMode : dayMode}
              alt=""
              className="size-7"
            />
          </button>
          <form onSubmit={handlechange}>
            <input
              type="text"
              name="search"
              placeholder="🎬Name👉Search📦"
              className={
                day
                  ? " rounded-3xl p-2 w-60 ps-7 outline-none"
                  : "search p-2 w-60 ps-7"
              }
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
