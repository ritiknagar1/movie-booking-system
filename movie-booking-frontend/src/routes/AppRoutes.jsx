import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Movies from "../pages/Movies";
import Shows from "../pages/Shows";
import Booking from "../pages/Booking";
import Seats from "../pages/Seats";
import Payment from "../pages/Payment";
import TicketPage from "../pages/TicketPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/shows/:movieId" element={<Shows />} />
      <Route path="/booking/:showId" element={<Booking />} />
      <Route path="/seats/:bookingId" element={<Seats />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/ticket" element={<TicketPage />} />
    </Routes>
  );
}
