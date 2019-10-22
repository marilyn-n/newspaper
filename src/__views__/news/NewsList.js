import React from 'react';
import ArticleItem from '../../__ui_components__/ArticleItem';

const NewsList = () => {
  return (
    <div className="news-list-wrapper py-3">
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
    </div>
  );
}

export default NewsList;
