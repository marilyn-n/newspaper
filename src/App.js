import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./layout/Nav";
import Home from "./__views__/home/Home.js";
import SearchResults from "./__views__/news/SearchResults";
import NotFound from "./layout/NotFound";
import Category from "./__views__/news/Category";
import Footer from "./layout/Footer";
import "./__styles__/main.scss";

const App = () => {
  const [sections, setSections] = useState([]);
  const fetchData = async () => {
    const key = process.env.REACT_APP_NYT_API_KEY;
    const res = await fetch(
      `${process.env.REACT_APP_NYT_URL}/svc/news/v3/content/section-list.json?api-key=${key}`
    );
    const response = await res.json();
    setSections(response.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Nav sections={sections} />
      <Routes>
        <Route path="/newspaper" element={<Home />} />
        <Route path="/section/:id" element={<Category />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
