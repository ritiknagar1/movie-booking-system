import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Shows.css";

export default function Shows() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [shows, setShows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredTheatres, setFilteredTheatres] = useState([]);

  useEffect(() => {
    const today = new Date();
    const numDays = 14; // current + next 13 days
    const theatres = [
      { name: "PVR Treasure Island", area: "MG Road" },
      { name: "INOX C21 Mall", area: "AB Road" },
      { name: "Cinepolis Phoenix", area: "Vijay Nagar" },
      { name: "PVR Malhar Mega Mall", area: "Vijay Nagar" },
      { name: "Cinepolis Vijay Nagar", area: "Vijay Nagar" },
      { name: "PVR Orbit Mall", area: "AB Road" },
      { name: "INOX Sapna Sangeeta", area: "Sapna Sangeeta" },
      { name: "Cinepolis Mangal City", area: "Vijay Nagar" }
    ];
    const showTimes = ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"];

    let showList = [];
    let idCounter = 1;

    for (let day = 0; day < numDays; day++) {
      const dateObj = new Date(today);
      dateObj.setDate(today.getDate() + day);
      const dateStr = dateObj.toISOString().split("T")[0];

      theatres.forEach(theatre => {
        showTimes.forEach(time => {
          showList.push({
            id: idCounter++,
            theatre: theatre.name,
            area: theatre.area,
            date: dateStr,
            time
          });
        });
      });
    }

    setShows(showList);

    // default selected date = today
    const defaultDate = today.toISOString().split("T")[0];
    setSelectedDate(defaultDate);

    groupShows(showList, defaultDate);
  }, []);

  const groupShows = (showsArray, date) => {
    const filtered = showsArray.filter(
      show =>
        (show.theatre.toLowerCase().includes(searchText.toLowerCase()) ||
          show.area.toLowerCase().includes(searchText.toLowerCase())) &&
        show.date === date
    );

    const grouped = filtered.reduce((acc, show) => {
      const key = show.theatre;
      if (!acc[key]) acc[key] = { ...show, times: [] };
      acc[key].times.push({ id: show.id, time: show.time });
      return acc;
    }, {});

    setFilteredTheatres(Object.values(grouped));
  };

  const handleSearch = () => groupShows(shows, selectedDate);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    groupShows(shows, newDate);
  };

  return (
    <div className="shows-container">
      <h2 className="page-title">🎬 Shows in Indore</h2>

      {/* Search + Date */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by theatre or area..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          min={new Date().toISOString().split("T")[0]}
          max={new Date(new Date().setDate(new Date().getDate() + 13))
            .toISOString()
            .split("T")[0]}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Shows Row-wise */}
      <div className="shows-row-container">
        {filteredTheatres.length === 0 && <p className="no-shows">No shows found</p>}

        {filteredTheatres.map(theatre => (
          <div key={theatre.theatre} className="theatre-row">
            <div className="theatre-info">
              <h3>{theatre.theatre}</h3>
              <span>{theatre.area}, Indore</span>
            </div>
            <div className="times-row">
              {theatre.times.map(t => (
                <button
                  key={t.id}
                  className="time-btn"
                  onClick={() => navigate(`/booking/${t.id}`)}
                >
                  {t.time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
