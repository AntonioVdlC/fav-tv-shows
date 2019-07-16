import React, { Fragment, useState, useEffect } from "react";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Main from "../../layout/Main";

import Show from "../../components/Show";

import api from "../../utils/api";

const Details = ({
  match: {
    params: { id }
  }
}) => {
  const [show, setShow] = useState();

  useEffect(() => {
    api.get("show", { params: [id] }).then(({ data }) => setShow(data));
  }, []);

  return (
    <Fragment>
      <Header isSearchVisible={false} />
      <Main>
        <Show show={show} />
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Details;
