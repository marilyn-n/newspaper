import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleItem from "../../__ui_components__/ArticleItem";
import GraphicCard from "../../__ui_components__/GraphicCard";
import BlockArticle from "../../__ui_components__/BlockArticle";

const Category = ( ) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState(searchParams.get("id") || "")
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const key = process.env.REACT_APP_NYT_API_KEY

    fetch(
      `${process.env.REACT_APP_NYT_URL}/svc/news/v3/content/nyt/${id}.json?api-key=${key}`
    )
      .then((response) => response.json())
      .then((data) => {
      console.log(data);

        if(data.results) {
          setArticles(data.results.filter((item) => item.multimedia != null));
        } else {
          console.log('Error - something went wrong fetching the Category service');
        }
      });
  }, []);

  const articleList = articles.length > 0
    ? articles.map((article, index) => {
        if (index === 0) {
          return (
            <div key={article.slug_name}>
              <GraphicCard card={article}/>
              <div className="double-divider" />
            </div>
          );
        }
        if (index % 4) {
          return (
            <ArticleItem data={article} />
          );
        } else if (index % 3) {
          return (
            <div key={Math.random() * 5}>
              <div className="single-divider" />
              <BlockArticle data={article}/>
              <div className="single-divider" />
            </div>
          );
        }
      })
    : null;

  return (
    <div className="category-wrapper">
      <div className="col-md-8 offset-md-2 news-list">
        <div className="news-list__header">
          <h2 className="label text-capitalize">{ id.toLocaleLowerCase()}</h2>
        </div>
        <div className="news-list__body" key={Math.random() * 5}>
          {articleList}
        </div>
      </div>
    </div>
  );
};

export default Category;
