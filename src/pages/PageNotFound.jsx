import React from "react";
import PNF from "../assets/PNF.png";
import { Link } from "react-router-dom";
import { Button } from "../Components/Indexc";

const PageNotFound = () => {
  return (
    <div className="flex flex-col text-center items-center">
      <div className="max-w-lg">
        <img src={PNF} alt="" />
      </div>
      <div>
        <Link to={""}>
          <Button>go back to home</Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
