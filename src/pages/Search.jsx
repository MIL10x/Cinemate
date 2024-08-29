import Card from "../Components/Card";
import usefetch from "../hooks/usefetch";
import { useSearchParams } from "react-router-dom";

const Search = ({ apipath }) => {
  const [searchparama] = useSearchParams();
  const query = searchparama.get("q");

  const { data: api, loading, error } = usefetch(apipath, query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  const message =
    api.length === 0 ? `No result found for ${query}` : `Result for ${query}`;

  return (
    <>
      <section>
        <p className="p-4 text-3xl font-bold dark:text-white">{message}</p>
        <div className="flex justify-start flex-wrap">
          {api.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Search;
