import React from "react";
import { useSelector } from "react-redux";

const Favourite = () => {
  const item = useSelector((state) => state.favourState.favourlist);

  return (
    <div>
      {item.map((_data) => (
        <p className="bg-red-600 h-10 w-10">_data.original_title</p>
      ))}
    </div>
  );
};

export default Favourite;
