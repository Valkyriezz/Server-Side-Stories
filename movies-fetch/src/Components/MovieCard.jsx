import React from "react";

const MovieCard = ({ movie }) => {
  const {
    Title: title,
    Year: year,
    Poster: poster,
    imdbRating,
    Genre: genre,
    Director: director,
    Plot: plot,
  } = movie;

  const createStarRating = (rating) => {
    if (rating === "N/A") return "Not available";

    const numRating = parseFloat(rating);
    const maxStars = 5;
    const filledStars = Math.round(numRating);
    const emptyStars = maxStars - filledStars;

    let stars = "";

    for (let i = 0; i < filledStars; i++) {
      stars += "★";
    }

    for (let i = 0; i < emptyStars; i++) {
      stars += "☆";
    }

    return stars + " (" + rating + "/5)";
  };

  return (
    <div>
      <hr />
      <h3>{title}</h3>
      <img
        src={poster !== "N/A" ? poster : "https://via.placeholder.com/200x300"}
        alt={title}
        width="200"
        height="300"
      />
      <p>
        <strong>Year:</strong> {year}
      </p>
      <p>
        <strong>IMDb Rating:</strong> {createStarRating(imdbRating)}
      </p>
      <p>
        <strong>Genre:</strong> {genre}
      </p>
      <p>
        <strong>Director:</strong> {director}
      </p>
      <p>
        <strong>Plot:</strong> {plot}
      </p>
      <br />
    </div>
  );
};

export default MovieCard;
