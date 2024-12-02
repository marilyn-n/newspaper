import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const BlockArticle = ({ data }) => {
  return (
    <Link to={data.web_url} className="block-article anchor">
      <div className="block-article__header">
        <h3 className="block-article__header--label-lg ellipsis-3">
          {data.headline.main}
        </h3>
      </div>
      <div className="block-article__body">
        <p className="block-article__body--paragraph ellipsis-3 my-2">
          {data.abstract}
        </p>
        <span className="block-article__body">
          <span className="tags--topic">{data.section}</span>
          <span className="tags--date">{moment(data.pub_date).fromNow()}</span>
        </span>
      </div>
    </Link>
  );
};

export default BlockArticle;
