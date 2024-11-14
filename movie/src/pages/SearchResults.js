import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import '../styles/SearchResult.css'
const API_URL = "https://www.omdbapi.com/";
const API_KEY = "3be7a9af"; 

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        setError("No search query provided.");
        return;
      }
      setLoading(true);
      setError(""); // Clear previous errors
      try {
        const res = await fetch(`${API_URL}?s=${query}&apikey=${API_KEY}`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error || "No movies found.");
          setMovies([]);
        }
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div className="search-results">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No movies found for "{query}". Try another search.</p>
      )}
    </div>
  );
};

export default SearchResults;
