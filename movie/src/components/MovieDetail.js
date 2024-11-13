import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/MovieDetails.css';

const API_URL = "http://www.omdbapi.com/";
const API_KEY = "3be7a9af";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}?i=${id}&apikey=${API_KEY}`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
          checkIfFavorite(data.imdbID);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  const checkIfFavorite = (movieId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.some((favorite) => favorite.imdbID === movieId)) {
      setIsFavorite(true);
    }
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.imdbID !== movie.imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite); 
  };

  return (
    <div className="movie-detail">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        movie && (
          <>
            <img src={movie.Poster} alt={movie.Title} />
            <h1>{movie.Title}</h1>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Director:</strong> {movie.Director ? movie.Director : "N/A"}</p>

            <p><strong>Cast:</strong> {movie.Actors}</p>
            <p><strong>Release Date:</strong> {movie.Released}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>

            {/* Favorite Button */}
            <button
              className={`favorite-btn ${isFavorite ? "favorite" : ""}`}
              onClick={toggleFavorite}
            >
              {isFavorite ? "❤️" : "🤍"} Add to Favorites
            </button>
          </>
        )
      )}
    </div>
  );
};

export default MovieDetail;
