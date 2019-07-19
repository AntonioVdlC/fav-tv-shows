import React, { Fragment, useState, useRef, useEffect } from "react";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Main from "../../layout/Main";

import MovieList from "../../components/MovieList";

import api from "../../utils/api";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef();

  let typingTimeout;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function onSearchInputChange({ target: { value } }) {
    // Only search after user stops typing
    if (typingTimeout) clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      api.get("search", { query: `?q=${value}` }).then(({ data }) => {
        setSearchText(value);
        setMovies(data);
      });
    }, 300);
  }

  return (
    <Fragment>
      <Header
        isSearchVisible={true}
        inputRef={inputRef}
        onSearchInputChange={onSearchInputChange}
      />
      <Main>
        {searchText ? (
          <p>Results for "{searchText}":</p>
        ) : (
          <p>Please use the search input to look for shows!</p>
        )}
        <MovieList movies={movies} />
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Search;
