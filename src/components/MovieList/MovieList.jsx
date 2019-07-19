import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { MovieType } from "../../types";

import styles from "./MovieList.css";

import defaultMovieImage from "./default-movie-image.svg";

function Movie({ movie }) {
  return (
    <li>
      <Link to={`/show/${movie.id}`}>
        <img
          src={movie.image ? movie.image.medium : defaultMovieImage}
          className={styles["movie-image"]}
          alt={movie.name}
        />
        <p className={styles["movie-name"]}>{movie.name}</p>
      </Link>
    </li>
  );
}

Movie.propTypes = {
  movie: MovieType.isRequired
};

function MovieList({ movies }) {
  return (
    <Fragment>
      {Array.isArray(movies) && movies.length ? (
        <ul className={styles["movie-list"]}>
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie.show ? movie.show : movie} />
          ))}
        </ul>
      ) : (
        <p className={styles["no-movies"]}>No movies ...</p>
      )}
    </Fragment>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({
    score: PropTypes.number,
    show: MovieType
  })
};

export default MovieList;
