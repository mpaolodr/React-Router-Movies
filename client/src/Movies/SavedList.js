import React from "react";
import { Link } from "react-router-dom";

const SavedList = ({ list }) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <div className="navLinks">
      {list.map(movie => (
        <Link
          to={`/movies/${movie.id}`}
          className="saved-movie"
          key={movie.title}
        >
          {movie.title}
        </Link>
      ))}
    </div>

    <Link to="/" className="home-button">
      Home
    </Link>
  </div>
);

export default SavedList;

// <Link to={`/movies/${movie.id}`} key={movie.title}>
//   <span className="saved-movie" key={movie.title}>
//     {movie.title}
//   </span>
// </Link>
