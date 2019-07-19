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
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    let show;
    api
      .get("show", { params: [id] })
      .then(({ data }) => {
        setShow(data);
        show = data;
        return api.get("favourites");
      })
      .then(({ data }) =>
        setIsFavourite(data.find(movie => movie.id === show.id))
      );
  }, []);

  function onToggleFavourite() {
    if (isFavourite) {
      api.delete("favourite", { params: [show.id] });
    } else {
      api.post("favourite", { body: { show } });
    }
    setIsFavourite(!isFavourite);
  }

  return (
    <Fragment>
      <Header isSearchVisible={false} />
      <Main>
        <Show
          show={show}
          isFavourite={isFavourite}
          onToggleFavourite={onToggleFavourite}
        />
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Details;
