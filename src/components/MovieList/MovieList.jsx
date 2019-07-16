import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./MovieList.css";

function Movie({ movie }) {
  return (
    <li>
      <Link to={`/show/${movie.show.id}`}>{console.log({ movie })}</Link>
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    // TODO
  }).isRequired
};

function MovieList({ movies }) {
  return (
    <Fragment>
      {Array.isArray(movies) && movies.length ? (
        <ul className={styles["movie-list"]}>
          {movies.map(movie => (
            <Movie movie={movie} />
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
    // TODO
  }).isRequired
};

export default MovieList;
