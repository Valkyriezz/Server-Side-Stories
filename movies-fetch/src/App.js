import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "1d4bd784";
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchMovies = async (query) => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}&s=${query}`);
      const data = await response.json();

      if (data.Response === "True") {
        const detailedMovies = await Promise.all(
          data.Search.slice(0, 6).map(async (movie) => {
            const detailResponse = await fetch(`${API_URL}&i=${movie.imdbID}`);
            const detailData = await detailResponse.json();
            return detailData;
          })
        );
        setMovies(detailedMovies);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found");
      }
    } catch (err) {
      setError("Failed to fetch movies");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchMovies(searchTerm);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              searchTerm={searchTerm}
              handleChange={handleChange}
              movies={movies}
              loading={loading}
              error={error}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
