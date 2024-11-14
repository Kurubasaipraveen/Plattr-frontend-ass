import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import '../styles/Home.css'
const API_URL = "https://www.omdbapi.com/";
const API_KEY = "3be7a9af";

const defaultQuery = "popular";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchMovies = async (searchQuery, pageNumber = 1) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `${API_URL}?s=${searchQuery}&apikey=${API_KEY}&page=${pageNumber}`
      );
      const data = await res.json();
      if (data.Response === "True") {
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);

        if (data.Search.length === 10) {
          fetchMovies(searchQuery, pageNumber + 1);
        }
      } else {
        if (pageNumber === 1) setError(data.Error || "Failed to load movies.");
      }
    } catch (err) {
      if (pageNumber === 1) setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies(defaultQuery, 1);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setMovies([]); 
      fetchMovies(query, 1); 
      navigate(`/search?query=${query}`); 
    }
  };

  return (
    <div className="home">
      <h1>Welcome to Movie Explorer</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="default-movies">
        {loading && movies.length === 0 ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : movies.length > 0 ? (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
