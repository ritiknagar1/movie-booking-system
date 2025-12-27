import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎬 Movie Booking</h2>
      <div>
        <Link to="/Login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/movies">Movies</Link>
      </div>
    </nav>
  );
}
