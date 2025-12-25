import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./seatstyle.css";

const ROWS = ["A", "B", "C", "D", "E", "F"];
const COLS = 10;

// example: already booked seats
const bookedSeats = ["A3", "B5", "C7", "E2"];

export default function Seats() {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div className="seats-container">

      {/* Header */}
      <div className="seats-header">
        <h2>Avengers: Endgame</h2>
        <p>PVR Cinemas • 7:30 PM</p>
      </div>

      {/* Screen */}
      <div className="screen">SCREEN THIS WAY</div>

      {/* Seats */}
      <div className="seats-grid">
        {ROWS.map((row) =>
          Array.from({ length: COLS }).map((_, index) => {
            const seatId = `${row}${index + 1}`;
            const isBooked = bookedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);

            return (
              <div
                key={seatId}
                className={`seat 
                  ${isBooked ? "booked" : ""} 
                  ${isSelected ? "selected" : ""}
                `}
                onClick={() => toggleSeat(seatId)}
              >
                {seatId}
              </div>
            );
          })
        )}
      </div>

      {/* Legend */}
      <div className="legend">
        <span><i className="seat available"></i> Available</span>
        <span><i className="seat selected"></i> Selected</span>
        <span><i className="seat booked"></i> Booked</span>
      </div>

      {/* Footer */}
      <div className="seats-footer">
        <p>
          Selected Seats:{" "}
          <strong>{selectedSeats.join(", ") || "None"}</strong>
        </p>
        <button
          disabled={selectedSeats.length === 0}
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
        </button>
      </div>

    </div>
  );
}
