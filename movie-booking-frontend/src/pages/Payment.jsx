import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Payment</h2>
      <button onClick={() => navigate("/ticket")}>
        Pay Now
      </button>
    </div>
  );
}
