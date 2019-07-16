import React from "react";

import styles from "./Footer.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      <span>
        Fav TV Shows by{" "}
        <a href="http://antoniovdlc.me">Antonio Villagra De La Cruz</a>. The{" "}
        <a href="https://github.com/AntonioVdlC/fav-tv-shows">source code</a> is
        licensed{" "}
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </span>
      <br />
      <span>
        Content by{" "}
        <a href="https://www.tvmaze.com/api" title="TV Maze">
          TVMaze
        </a>
        .
      </span>
    </p>
  </footer>
);

export default Footer;
