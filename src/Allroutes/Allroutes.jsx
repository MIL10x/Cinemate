import { MovieList, ListDetail, PageNotFound, Search } from "../pages/Indexp";
import { Routes, Route } from "react-router-dom";

const Allroutes = () => {
  return (
    <div className="dark:bg-slate-800 min-h-[80vh]">
      <main className="h-auto container mx-auto p-10">
        <Routes>
          <Route path="/" element={<MovieList apipath="movie/now_playing" />} />
          <Route
            path="/movies/top"
            element={<MovieList apipath="movie/top_rated" />}
          />
          <Route
            path="/movies/pop"
            element={<MovieList apipath="movie/popular" />}
          />
          <Route
            path="movies/up"
            element={<MovieList apipath="movie/upcoming" />}
          />
          <Route path="/movies/:id" element={<ListDetail />} />
          <Route path="/Search" element={<Search apipath="search/movie" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default Allroutes;
