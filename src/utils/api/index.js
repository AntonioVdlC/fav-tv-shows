import axios from "axios";

const api = {
  get: (resource, { params, query } = {}) => {
    switch (resource) {
      case "favourites":
        const result = localStorage.getItem("favourites")
          ? JSON.parse(localStorage.getItem("favourites"))
          : null;
        return Promise.resolve(result);
      case "search":
        return axios("https://api.tvmaze.com/search/shows" + query);
      case "show":
        return axios(
          "https://api.tvmaze.com/shows" +
            params.reduce((acc, cur) => acc + "/" + cur, "")
        );
    }
  },
  post: () => {},
  put: () => {},
  delete: () => {}
};

export default api;
