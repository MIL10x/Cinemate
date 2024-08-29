import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;
const usefetch = (apipath, quy) => {
  const [data, setdata] = useState([]);
  const lin = `https://api.themoviedb.org/3/${apipath}?language=en-US&page=1&query=${quy}`;
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };
    async function fetchapi() {
      const response = await fetch(lin, options);
      const data = await response.json();
      setdata(data.results || []);
    }
    fetchapi();
  }, [apipath, quy]);
  return { data };
};

export default usefetch;
