import { useEffect, useState } from "react";

const usefetch = (apipath, quy) => {
  const [data, setdata] = useState([]);
  const lin = `https://api.themoviedb.org/3/${apipath}?language=en-US&page=1&query=${quy}`;
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2M2NzNiZTQyZTI0MzkzM2Q4NTczZGJjYjc5MDY5MyIsIm5iZiI6MTcyNDY2MjQ5Ni4wMTU3NDcsInN1YiI6IjY2Y2MzNGFkZGNhZDc5M2I0MzNkMjgyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqauHPQUDDW131_wbfx8n8oWDoKNiK_TyF34x4Hzing",
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
