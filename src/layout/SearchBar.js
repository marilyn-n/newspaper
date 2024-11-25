import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  const search = (e) => {
    e.preventDefault();
    const nytUrl = `${process.env.REACT_APP_NYT_URL}/svc/search/v2/articlesearch.json?`;
    const query = e.target.firstChild.value;
    const sortBy = "sort=newest";
    const facet = "facet=true";
    const key = `api-key=${process.env.REACT_APP_NYT_API_KEY}`;
    const url = `${nytUrl}q=${query}&fq=headline:("${query}")&${facet}&${sortBy}&${key}`;

    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.response.docs[0]);
        if (data.response.docs.length) {
          navigate('/search-results');
          // navigate({
          //   pathname: "/search-results",
          //   results: data,
          //   searchTerm: query,
          // });
        } else {
          navigate("/not-found");
        }
      })
      .catch((err) => err);
  };

  return (
    <div className="search-bar">
      <form onSubmit={(e) => search(e)}>
        <input
          type="text"
          name="search"
          className="form-control"
          placeholder="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;