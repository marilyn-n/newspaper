import React, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Nav from "./layout/Nav";
import Home from "./__views__/home/Home.js";
import SearchResults from "./__views__/news/SearchResults";
import NotFound from "./layout/NotFound";
import Category from "./__views__/news/Category";
import Footer from "./layout/Footer";
import "./__styles__/main.scss";
import { Link } from "react-router-dom";

const App = () => {
  const [sections, setSections] = useState([]);

  useEffect(async () => {
    const key = "qXeixuscPMPwQiAGAHHXhoSkt2zDb9O9";
    const res = await fetch(
      `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${key}`
    );
    const response = await res.json();
    setSections(response.results);
  }, []);

  return (
    <>
      <Nav sections={sections} />
      <Home />
      {/* <Router>
          <div>
            <div className="app-wrapper container">
              <Routes>
                <Route path="/section/:category_name">
                  <Category />
                </Route>
                <Route path="/search-results">
                  <SearchResults />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Routes>
            </div>
          </div>
        </Router> */}
      <Footer />
    </>
  );
};

export default App;
