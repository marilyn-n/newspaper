import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { strToUpperCase, author } from "../Helpers";

const MediaCard = ({ details, redirectTo }) => {
  return (
    <>
      <NavLink
        to={redirectTo ? redirectTo : "/category:id/new:id"}
        className="media-card anchor"
      >
        <div className="item pr-3">
          <div className="media-card__header">
            <h2 className="media-card__header--title">
              {details.title}
            </h2>
          </div>
          <div className="media-card__body">
            <span className="media-card__body--byline">
              {strToUpperCase(author(details.byline))}
            </span>
            <p className="media-card__body__paragraph">
              {details.abstract}
            </p>
            <div>
              <span className="tags--topic">{details.section}</span>
              <span className="tags--date">
                {moment(details.created_date).fromNow()}
              </span>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={details.multimedia[0].url} alt="media" />
        </div>
      </NavLink>
    </>
  );
};

export default MediaCard;
