import React from "react";
import { useSelector } from "react-redux";
import Card from "../Components/Card";

const Favourite = () => {
  const item = useSelector((state) => state.favourState.favourlist);
  console.log(item);
  return (
    <div className="flex flex-wrap">
      {item.map((_data) => (
        <Card key={_data.id} movie={_data} />
      ))}
    </div>
  );
};

export default Favourite;
