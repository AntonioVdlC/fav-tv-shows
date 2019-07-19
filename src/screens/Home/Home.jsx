import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Main from "../../layout/Main";

import MovieList from "../../components/MovieList";

import api from "../../utils/api";

function Home({ history }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // TODO: Add loading and error states
    api.get("favourites").then(({ data }) => setFavourites(data));
  }, []);

  return (
    <Fragment>
      <Header
        isSearchVisible={true}
        onSearchClick={() => history.push("/search")}
      />
      <Main>
        {/* TODO: Add Loading and Error components */}
        <MovieList movies={favourites} />
      </Main>
      <Footer />
    </Fragment>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Home;
