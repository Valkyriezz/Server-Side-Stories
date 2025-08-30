import React from "react";
import MovieCard from "../Components/MovieCard";

const Main = ({ searchTerm, handleChange, movies, loading, error }) => {
  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={handleChange}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {!loading && !error && movies.length === 0 && searchTerm && (
        <p>No movies found for "{searchTerm}"</p>
      )}
    </div>
  );
};

export default Main;
