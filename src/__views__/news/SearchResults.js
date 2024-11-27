import React from "react";
import ArticleItem from "../../__ui_components__/ArticleItem";
import BlockArticle from "../../__ui_components__/BlockArticle";

const SearchResults = ({ location }) => {
  const searchTerm = location.searchTerm;
  const hits = location.results.response.meta.hits;
  const searchResults = location.results.response.docs;
  const resultsList = searchResults.length
    ? searchResults.map((item) => {
        if (item.multimedia.length > 3) {
          return (
            <ArticleItem data={item} />
          );
        } else {
          return (
            <BlockArticle data={item} />
          );
        }
      })
    : null;

  return (
    <div className="search-results">
      <div className="search-results__wrapper col-md-8 offset-md-2">
        <div className="search-results__header">
          <span>
            Showing {hits} results for "{searchTerm}"
          </span>
        </div>
        {resultsList}
      </div>
      {/* <button className="btn btn-dark d-block mx-auto"> Load more </button> */}
    </div>
  );
};

export default SearchResults;
