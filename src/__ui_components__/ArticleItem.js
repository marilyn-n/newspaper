import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ArticleItem = ({ data }) => {
  return (
    <Link to={data.url} className="article-item anchor">
      <div className="article-item__header">
        <h2 className="article-item__header--title">{data.title}</h2>
        <p className="article-item__header--paragraph">{data.abstract}</p>
        {data.byline ? (
          <div>
            <span className="tags--by">{data.byline}</span>
            <span className="tags--date">
              {moment(data.published_date).fromNow()}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <img src={data.multimedia[2]?.url} alt="article-img" />
    </Link>
  );
};

export default ArticleItem;
