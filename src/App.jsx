import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Details from "./screens/Details";
import Home from "./screens/Home";
import Search from "./screens/Search";

import styles from "./App.css";

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/show/:id" component={Details} />
  </Router>
);

export default App;
