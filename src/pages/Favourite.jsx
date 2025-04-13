import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
const Favourite = () => {
  const [item, setitem] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    async function fetchdata() {
      const data = await axios.get(`${BACKEND_URL}/userdata/cuser`);
      if (data) {
        setitem(data.data);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="flex flex-wrap">
      {item.length > 0 &&
        item.map((_data) =>
          _data.moviedetail.map((dataa) => (
            <Card key={dataa.id} movie={dataa} />
          ))
        )}
    </div>
  );
};
export default Favourite;
