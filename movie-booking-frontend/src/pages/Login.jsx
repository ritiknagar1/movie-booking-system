import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isDisabled = !email || !password;

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="title">Welcome Back 👋</h2>
        <p className="subtitle">Login to continue</p>

        <div className="form-group">
          <label>Email</label>
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
        </div>

        <button
          className={`login-btn ${isDisabled ? "disabled" : ""}`}
          onClick={() => navigate("/movies")}
        >
          Login
        </button>

        <p className="register-text">
          New user?{" "}
          <span className="register-link" onClick={() => navigate("/register")}>
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
}
