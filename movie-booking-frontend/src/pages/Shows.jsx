import { useParams, useNavigate } from "react-router-dom";
import { shows } from "../data/dummyData";

export default function Shows() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="grid">
      {shows
        .filter(s => s.movieId == movieId)
        .map(show => (
          <div key={show.id} className="card">
            <p>Time: {show.time}</p>
            <p>₹{show.price}</p>
            <button onClick={() => navigate(`/booking/${show.id}`)}>
              Book
            </button>
          </div>
        ))}
    </div>
  );
}
