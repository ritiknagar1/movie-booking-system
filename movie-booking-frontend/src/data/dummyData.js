export const movies = [
  { id: 1, title: "Inception", duration: "2h 28m" },
  { id: 2, title: "Interstellar", duration: "2h 49m" }
];

export const shows = [
  { id: 101, movieId: 1, time: "10:00 AM", price: 200 },
  { id: 102, movieId: 1, time: "6:00 PM", price: 250 },
  { id: 103, movieId: 2, time: "9:00 PM", price: 300 }
];

export const seats = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  number: `A${i + 1}`,
  booked: i % 5 === 0
}));
