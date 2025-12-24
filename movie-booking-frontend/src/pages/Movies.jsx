import { movies } from "../data/dummyData";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  return (
    <div className="grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
