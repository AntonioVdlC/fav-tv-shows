import React from "react";

import { MovieType } from "../../types";

import styles from "./Show.css";

function Show({ show }) {
  return show ? (
    <div className={styles.show}>
      <div className={styles["movie-info"]}>
        <img
          src={show.image ? show.image.medium : defaultMovieImage}
          className={styles["movie-image"]}
          alt={show.name}
        />
        <p className={styles["movie-name"]}>{show.name}</p>
      </div>
      <p className={styles["movie-summary"]}>
        {/* 
          Instead of using `dangerouslySetInnerHTML`, which might expose the user 
          to XSS attacks, we are replacing HTML tags with safe chars alternatives 
        */}
        {show.summary.replace(/<p>/g, "").replace(/<\/p>/g, "\n\n")}
      </p>
    </div>
  ) : null;
}

Show.propTypes = {
  show: MovieType
};

export default Show;
