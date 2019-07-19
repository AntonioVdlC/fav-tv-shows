import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./MovieList.css";

import defaultMovieImage from "./default-movie-image.svg";

const MovieType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  status: PropTypes.string.isRequired,
  runtime: PropTypes.number,
  premiered: PropTypes.string.isRequired,
  officialSite: PropTypes.string,
  schedule: PropTypes.shape({
    time: PropTypes.string.isRequired,
    days: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired,
  rating: PropTypes.shape({
    average: PropTypes.number
  }).isRequired,
  weight: PropTypes.number.isRequired,
  network: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      timezone: PropTypes.string.isRequired
    }).isRequired
  }),
  webChannel: PropTypes.string,
  externals: PropTypes.shape({
    tvrage: PropTypes.number,
    thetvdb: PropTypes.number,
    imdb: PropTypes.string
  }).isRequired,
  image: PropTypes.shape({
    medium: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired
  }),
  summary: PropTypes.string.isRequired,
  updated: PropTypes.number.isRequired,
  _links: PropTypes.shape({
    self: PropTypes.shape({
      href: PropTypes.string.isRequired
    }).isRequired,
    previousepisode: PropTypes.shape({
      href: PropTypes.string.isRequired
    })
  }).isRequired
});

function Movie({ movie }) {
  return (
    <li key={movie.id}>
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
            <Movie movie={movie.show ? movie.show : movie} />
          ))}
        </ul>
      ) : (
        <p className={styles["no-movies"]}>No movies ...</p>
      )}
    </Fragment>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(MovieType).isRequired
};

export default MovieList;
