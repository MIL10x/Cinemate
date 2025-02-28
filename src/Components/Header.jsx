import logo from "../assets/logo.png";
import dayMode from "../assets/dayMode.png";
import nightMode from "../assets/nightMode.png";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { usePreventBodyScroll } from "react-haiku";

const Header = () => {
  const { isScrollLocked, toggleScrollLock } = usePreventBodyScroll();
  const navi = useNavigate();
  const [search, setsearch] = useState(false);
  const [menu, setmenu] = useState(false);
  const searchdata = useRef();
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
  const handlesearchdata = (event) => {
    event.preventDefault();
    const dataofsearch = searchdata.current.value;
    navi(`/search?q=${dataofsearch}`);
  };
  return (
    <>
      <div
        className={`flex justify-between gap-6 p-5 ${
          search ? "" : "px-10"
        } items-center shadow-lg  shadow-slate-300 flex-wrap dark:bg-slate-900`}
      >
        {!search && (
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" className="size-16" />
            </Link>
          </div>
        )}
        <div className="flex gap-7 lg:flex max-lg:hidden">
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
          <NavLink to={"/blog"}>
            <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Blog
            </span>
          </NavLink>
          <NavLink to={"/Favourite"}>
            <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Favourite
            </span>
          </NavLink>
        </div>
        <div className="flex items-center gap-3">
          {!search && (
            <button className="border-2 shadow-slate-300 p-2 rounded-lg">
              <img
                onClick={() => setday(!day)}
                src={day ? nightMode : dayMode}
                alt=""
                className="size-7"
              />
            </button>
          )}
          <input
            type="text"
            name="search"
            ref={searchdata}
            placeholder="🎬Name👉Search📦"
            className={
              day
                ? " rounded-3xl p-2 w-60 ps-7 outline-none max-lg:hidden"
                : "search p-2 w-60 ps-7 max-lg:hidden"
            }
          />
          <button
            onClick={handlesearchdata}
            className="border-2 shadow-slate-300 p-2 rounded-lg max-lg:hidden "
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
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          {!search && (
            <button
              onClick={() => setsearch(true)}
              className="border-2 shadow-slate-300 p-2 rounded-lg lg:hidden "
            >
              <svg
                className="w-6 h-6 text-gray-500 dark:text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          )}
          {search && (
            <div className="flex h-14  gap-3 items-center ">
              <button
                onClick={() => setsearch(false)}
                className="border-2 shadow-slate-300 p-2 rounded-lg lg:hidden "
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12l4-4m-4 4 4 4"
                  />
                </svg>
              </button>
              <input
                type="text"
                name="search"
                ref={searchdata}
                placeholder="🎬Name👉Search📦"
                className={
                  day
                    ? " rounded-3xl p-2 w-60 ps-7 outline-none "
                    : "search p-2 w-60 ps-7 "
                }
              />
              <button
                onClick={handlesearchdata}
                className="border-2 shadow-slate-300 p-2 rounded-lg lg:hidden "
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
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          )}
          {!search && (
            <button
              onClick={() => {
                setmenu(true);
                toggleScrollLock(isScrollLocked);
              }}
              className="border-2 shadow-slate-300 p-2 rounded-lg lg:hidden "
            >
              <svg
                className="w-6 h-6 text-gray-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 6H6m12 4H6m12 4H6m12 4H6"
                />
              </svg>
            </button>
          )}
          {menu && (
            <div className=" absolute top-0 left-0 bg-white shadow-slate-300 lg:hidden  dark:bg-slate-900  z-10 p-20   h-screen flex flex-col w-full gap-7 flex-wrap ">
              <div className="w-full flex justify-end pb-10 ">
                <button
                  className="border-2 shadow-slate-300 p-2 rounded-full  "
                  onClick={() => {
                    setmenu(false);
                    toggleScrollLock(!isScrollLocked);
                  }}
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </button>
              </div>
              <NavLink
                to={"/"}
                onClick={() => {
                  setmenu(false);
                  toggleScrollLock(!isScrollLocked);
                }}
              >
                <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  Home
                </span>
              </NavLink>
              <NavLink
                to={"movies/pop"}
                onClick={() => {
                  setmenu(false);
                  toggleScrollLock(!isScrollLocked);
                }}
              >
                <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  Popular
                </span>
              </NavLink>
              <NavLink
                to={"movies/top"}
                onClick={() => {
                  setmenu(false);
                  toggleScrollLock(!isScrollLocked);
                }}
              >
                <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  Top Rated
                </span>
              </NavLink>
              <NavLink
                to={"movies/up"}
                onClick={() => {
                  setmenu(false);
                  toggleScrollLock(!isScrollLocked);
                }}
              >
                <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  Upcoming
                </span>
              </NavLink>
              <NavLink
                to={"/blog"}
                onClick={() => {
                  setmenu(false);
                  toggleScrollLock(!isScrollLocked);
                }}
              >
                <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  Blog
                </span>
              </NavLink>
              <NavLink
                to={"/Favourite"}
                onClick={() => {
                  setmenu(false);
                  toggleScrollLock(!isScrollLocked);
                }}
              >
                <span className="text-xl font-normal text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  Favourite
                </span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
