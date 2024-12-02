import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import img from "../assets/nyt-placeholder.png"

const ArticleItem = ({ data }) => {
 let IMG_URL = img

 if(data.multimedia[0]?.url.includes('.png') ) {
  IMG_URL = `${process.env.REACT_APP_NYT_IMG_PREFIX}/${data.multimedia[0].url}`
 } 

 if(data.multimedia[0]?.url.includes('static01.nyt.com')) {
  IMG_URL = `${data.multimedia[0].url}`

 }

  return (
    <Link to={data.web_url} className="article-item anchor">
      <div className="article-item__header">
        <h2 className="article-item__header--title">{data.headline?.main}</h2>
        <p className="article-item__header--paragraph">{data.abstract}</p>
        {data.byline ? (
          <div>
            <span className="tags--by">{data.byline.original}</span>
            <span className="tags--date">
              {moment(data.pub_date).fromNow()}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <img src={IMG_URL} alt="article-img" />
    </Link>
  );
};

export default ArticleItem;
