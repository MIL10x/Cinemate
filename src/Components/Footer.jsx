import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 drop-shadow-2xl w-full py-10 dark:bg-gray-800 dark:shadow-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            CineInfo
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/grown_up_kid__/"
              target="_blank"
              rel="noreffer"
              className="hover:underline me-4 md:me-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/milton-vinciline-v-58b824205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreffer"
              className="hover:underline me-4 md:me-6"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=miltonvinciline08@gmail.com"
              target="_blank"
              rel="noreffer"
              className="hover:underline"
            >
              Gmail
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
