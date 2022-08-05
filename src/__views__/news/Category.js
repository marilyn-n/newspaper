import React, { useState, useEffect } from "react";
import moment from "moment";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const Category = (props) => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const key = "qXeixuscPMPwQiAGAHHXhoSkt2zDb9O9";

    fetch(
      `https://api.nytimes.com/svc/news/v3/content/nyt/${id}.json?api-key=${key}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);

        setArticles(data.results.filter((item) => item.multimedia != null));
      });
  }, []);

  const articleList = articles.length
    ? articles.map((article, index) => {
        if (index === 0) {
          return (
            <div key={article.slug_name}>
              <a
                href={article.uri}
                target="_blank"
                className="graphic-card anchor"
                key={article.title}
              >
                <div className="graphic-card__section pr-3">
                  <div className="graphic-card__header">
                    <span className="graphic-card__header--title">
                      {article.title}
                    </span>
                  </div>
                  <div className="graphic-card__body">
                    <div className="graphic-card__body__paragraph">
                      {article.abstract}
                      <div>
                        <span className="tags--topic">{article.section} </span>
                        <span className="tags--date">
                          {moment(article.created_date).fromNow()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="graphic-card__section pl-3">
                  <img
                    className={!article.multimedia[2].copyright ? "mb-2" : ""}
                    src={article.multimedia[2].url}
                    alt="graphic"
                  />
                  {article.multimedia[2].copyright ? (
                    <span className="caption my-1">
                      {" "}
                      {article.multimedia[2].copyright}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </a>
              <div className="double-divider" />
            </div>
          );
        }
        if (index % 4) {
          return (
            <a
              href={article.url}
              target="_blank"
              className="article-item anchor"
              key={Math.random() * 5}
            >
              <div className="article-item__header">
                <h2 className="article-item__header--title">{article.title}</h2>
                <p className="article-item__header--paragraph">
                  {article.abstract}
                </p>
                {article.byline ? (
                  <div>
                    <span className="tags--by">{article.byline}</span>
                    <span className="tags--date">
                      {moment(article.published_date).fromNow()}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <img src={article.multimedia[2].url} alt="article-img" />
            </a>
          );
        } else if (index % 3) {
          return (
            <div key={Math.random() * 5}>
              <div className="single-divider" />
              <a
                href={article.url}
                target="_blank"
                className="block-article anchor"
              >
                <div className="block-article__header">
                  <h3 className="block-article__header--label-lg">
                    {article.title}
                  </h3>
                </div>
                <div className="block-article__body">
                  <p className="block-article__body--paragraph">
                    {article.abstract}
                  </p>
                  <div>
                    {article.byline ? (
                      <span className="tags--by">{article.byline}</span>
                    ) : (
                      ""
                    )}
                    <span className="tags--date">
                      {moment(article.published_date).fromNow()}
                    </span>
                  </div>
                </div>
              </a>
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
          <h2 className="label text-capitalize">headline</h2>
        </div>
        <div className="news-list__body" key={Math.random() * 5}>
          {articleList}
        </div>
      </div>
    </div>
  );
};

export default Category;
