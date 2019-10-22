import React from 'react';
import ArticleItem from '../../__ui_components__/ArticleItem';

const NewsList = () => {
  return (
    <div className="news-list-wrapper py-3">
      <div className="news-list-wrapper__header">
        <h2>Topic</h2>
      </div>
      <div className="single-light-divider my-3"></div>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
    </div>
  );
}

export default NewsList;
