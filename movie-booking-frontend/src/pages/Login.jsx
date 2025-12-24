import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button onClick={() => navigate("/movies")}>Login</button>
      <p>
        New user? <span onClick={() => navigate("/register")}>Register</span>
      </p>
    </div>
  );
}

