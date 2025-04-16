import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
const Favourite = () => {
  const [item, setitem] = useState();
  const [itemcheck, setitemcheck] = useState();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const userid = sessionStorage.getItem("userid");
  useEffect(() => {
    async function fetchdata() {
      const data = await axios.get(`${BACKEND_URL}/userdata/cuser/${userid}`);
      if (data) {
        setitem(data.data);
      }
    }
    fetchdata();
  }, []);
  useEffect(() => {
    if (item && userid) {
      const tdata = item[0].moviedetail;

      setitemcheck(tdata[0]);
    }
  }, [item, userid]);

  return (
    <div className="flex flex-wrap dark:text-white">
      {item && userid ? (
        item[0].moviedetail.length > 0 ? (
          item[0].moviedetail.map((_data) => (
            <Card key={_data.id} movie={_data} />
          ))
        ) : (
          <p className="text-2xl font-bold">No Favourite found</p>
        )
      ) : (
        <div>
          <p className="text-2xl font-bold">No Favourite found</p>
          {!userid && (
            <p>please login the account if you want to add favorite</p>
          )}
        </div>
      )}
    </div>
  );
};
export default Favourite;
