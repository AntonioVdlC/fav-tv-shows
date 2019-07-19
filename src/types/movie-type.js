import PropTypes from "prop-types";

const MovieType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  status: PropTypes.string.isRequired,
  runtime: PropTypes.number,
  premiered: PropTypes.string.isRequired,
  officialSite: PropTypes.string,
  schedule: PropTypes.shape({
    time: PropTypes.string.isRequired,
    days: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired,
  rating: PropTypes.shape({
    average: PropTypes.number
  }).isRequired,
  weight: PropTypes.number.isRequired,
  network: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      timezone: PropTypes.string.isRequired
    }).isRequired
  }),
  webChannel: PropTypes.string,
  externals: PropTypes.shape({
    tvrage: PropTypes.number,
    thetvdb: PropTypes.number,
    imdb: PropTypes.string
  }).isRequired,
  image: PropTypes.shape({
    medium: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired
  }),
  summary: PropTypes.string.isRequired,
  updated: PropTypes.number.isRequired,
  _links: PropTypes.shape({
    self: PropTypes.shape({
      href: PropTypes.string.isRequired
    }).isRequired,
    previousepisode: PropTypes.shape({
      href: PropTypes.string.isRequired
    })
  }).isRequired
});

export default MovieType;
