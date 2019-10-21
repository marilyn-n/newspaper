import React from 'react';
import ArticleItem from '../../__ui_components__/ArticleItem';

const NewsList = () => {
  return (
    <div className="news-list-wrapper mx-auto d-block ">
      <ArticleItem/>
      <div className="single-light-divider my-3"></div>
      <ArticleItem/>
      <div className="single-light-divider my-3"></div>
      <ArticleItem/>
      <div className="single-light-divider my-3"></div>
      <ArticleItem/>
    </div>
  );
}

export default NewsList;
