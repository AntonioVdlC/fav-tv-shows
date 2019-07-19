import axios from "axios";

const api = {
  get: (resource, { params, query } = {}) => {
    switch (resource) {
      case "favourites":
        const result = localStorage.getItem("favourites")
          ? JSON.parse(localStorage.getItem("favourites"))
          : null;
        return Promise.resolve({ data: result });
      case "search":
        return axios("https://api.tvmaze.com/search/shows" + query);
      case "show":
        return axios(
          "https://api.tvmaze.com/shows" +
            params.reduce((acc, cur) => acc + "/" + cur, "")
        );
    }
  },
  post: (resource, { body } = {}) => {
    switch (resource) {
      case "favourite":
        const favourites = localStorage.getItem("favourites")
          ? JSON.parse(localStorage.getItem("favourites"))
          : [];
        if (body && body.show) {
          if (!favourites.some(movie => movie.id === body.show.id)) {
            favourites.push(body.show);
          }
        }
        localStorage.setItem("favourites", JSON.stringify(favourites));
        return Promise.resolve({ data: favourites });
    }
  },
  delete: (resource, { params } = {}) => {
    switch (resource) {
      case "favourite":
        const favourites = localStorage.getItem("favourites")
          ? JSON.parse(localStorage.getItem("favourites"))
          : null;

        if (params == null || !favourites) {
          return Promise.reject();
        } else {
          const newFavourites = favourites.filter(
            favourite => favourite.id !== parseFloat(params[0])
          );
          localStorage.setItem("favourites", JSON.stringify(newFavourites));
          return Promise.resolve({ data: newFavourites });
        }
    }
  }
};

export default api;
