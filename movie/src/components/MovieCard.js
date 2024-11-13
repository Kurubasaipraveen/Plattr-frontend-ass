import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate(); 
  const handleCardClick = () => {
    navigate(`/movie/${movie.imdbID}`); 
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      <div className="card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.Title}
        className="movie-card-img"
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
    </div>
  );
};

export default MovieCard;
