import React, { useState, useEffect } from "react";
import ArticleItem from "../../__ui_components__/ArticleItem";
import BlockArticle from "../../__ui_components__/BlockArticle";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );
  const [searchResults, setSearchResults] = useState({
    theTotalResults: 0,
    theNewsResults: [],
  });

  const search = () => {
    const nytUrl = `${process.env.REACT_APP_NYT_URL}/svc/search/v2/articlesearch.json?`;
    const sortBy = "sort=newest";
    const facet = "facet=true";
    const key = `api-key=${process.env.REACT_APP_NYT_API_KEY}`;
    const url = `${nytUrl}q=${searchQuery}&fq=headline:${searchQuery}&${facet}&${sortBy}&${key}`;

    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          setSearchResults({
            theTotalResults: data.response.meta.hits,
            theNewsResults: data.response.docs,
          });
        } else {
          console.log("Error: search service error");
        }
      })
      .catch((err) => err);
  };

  console.log(searchResults);

  useEffect(() => {
    search();
  }, [searchParams, searchQuery]);

  const renderResults = searchResults.theNewsResults.map((item, index) => {
    return item.multimedia.length > 0 && index % 3 === 0 ? (
      <>
        <ArticleItem data={item} />
        <div className="double-divider"></div>
      </>
    ) : (
      <>
        <BlockArticle data={item} />
        <div className="single-divider"></div>
      </>
    );
  });

  return (
    <div className="search-results">
      <div className="search-results__wrapper col-md-8 offset-md-2">
        <div className="search-results__header">
          <span>
            Showing {searchResults.theNewsResults.length} of{" "}
            {searchResults.theTotalResults} results for {searchQuery}
          </span>
        </div>
        {renderResults}
      </div>
      {/* <button className="btn btn-dark d-block mx-auto"> Load more </button> */}
    </div>
  );
};

export default SearchResults;
