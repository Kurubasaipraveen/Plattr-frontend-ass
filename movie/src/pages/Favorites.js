import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../styles/Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="favorites">
      <h1>Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies found.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
