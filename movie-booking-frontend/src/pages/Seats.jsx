import { seats } from "../data/dummyData";
import { useNavigate } from "react-router-dom";

export default function Seats() {
  const navigate = useNavigate();

  return (
    <div className="grid">
      {seats.map(seat => (
        <div
          key={seat.id}
          className={`seat ${seat.booked ? "booked" : ""}`}
        >
          {seat.number}
        </div>
      ))}
      <button onClick={() => navigate("/payment")}>
        Proceed to Payment
      </button>
    </div>
  );
}
