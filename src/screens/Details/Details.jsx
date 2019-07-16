import React, { Fragment } from "react";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Main from "../../layout/Main";

const Details = () => {
  return (
    <Fragment>
      <Header isSearchVisible={false} />
      <Main></Main>
      <Footer />
    </Fragment>
  );
};

export default Details;
