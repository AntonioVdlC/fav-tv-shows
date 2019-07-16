import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Main from "../../layout/Main";

const Home = ({ history }) => {
  return (
    <Fragment>
      <Header
        isSearchVisible={true}
        onSearchClick={() => history.push("/search")}
      />
      <Main></Main>
      <Footer />
    </Fragment>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Home;
