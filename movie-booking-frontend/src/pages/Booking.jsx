import { useNavigate, useParams } from "react-router-dom";

export default function Booking() {
  const { showId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Booking for Show {showId}</h2>
      <button onClick={() => navigate(`/seats/${showId}`)}>
        Select Seats
      </button>
    </div>
  );
}
