import React, { Fragment, useState } from "react";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Main from "../../layout/Main";

import MovieList from "../../components/MovieList";

import api from "../../utils/api";

const Search = () => {
  const [movies, setMovies] = useState([]);

  return (
    <Fragment>
      <Header
        isSearchVisible={true}
        onSearchInputChange={({ target: { value } }) => {
          // TODO: Debounce input
          api
            .get("search", { query: `?q=${value}` })
            .then(({ data }) => setMovies(data));
        }}
      />
      <Main>
        <MovieList movies={movies} />
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Search;
