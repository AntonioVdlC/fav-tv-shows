import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Header.css";

const Header = ({ isSearchVisible, onSearchClick, onSearchInputChange }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <Link to="/">Fav TV Shows</Link>
    </h1>
    {isSearchVisible ? (
      <input
        type="text"
        onClick={onSearchClick}
        onKeyUp={onSearchInputChange}
      />
    ) : null}
  </header>
);

Header.propTypes = {
  isSearchVisible: PropTypes.bool.isRequired,
  onSearchClick: PropTypes.func,
  onSearchInputChange: PropTypes.func
};

Header.defaultProps = {
  onSearchClick: () => {},
  onSearchInputChange: () => {}
};

export default Header;
