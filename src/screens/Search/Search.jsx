import React, { Fragment } from "react";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Main from "../../layout/Main";

const Search = () => {
  return (
    <Fragment>
      <Header
        isSearchVisible={true}
        onSearchInputChange={() => console.log("TODO")}
      />
      <Main></Main>
      <Footer />
    </Fragment>
  );
};

export default Search;
