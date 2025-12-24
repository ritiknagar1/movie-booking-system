import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <p>{movie.duration}</p>
      <button onClick={() => navigate(`/shows/${movie.id}`)}>
        View Shows
      </button>
    </div>
  );
}
