import Card from "../Components/Card";
import usefetch from "../hooks/usefetch";

const MovieList = ({ apipath }) => {
  const { data: api } = usefetch(apipath);
  return (
    <div className="flex flex-wrap">
      {api.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
