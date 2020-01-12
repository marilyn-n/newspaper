import React from 'react';
import { NavLink } from 'react-router-dom';

const MediaCard = () => {
  return (
    <NavLink to="/category:id/new:id" className="media-card anchor">
      <div className="item">
        <div className="media-card__header">
          <h2 className="media-card__header--title">
              Diahann Carroll Was the Only Mother I Knew
          </h2>
        </div>
        <div className="media-card__body">
            <p className="media-card__body__paragraph">
              Stand by Trump Because They Like What He Does, 
              Republicans.
            </p>
            <div className="tags">
              <span className="tag--topic">Style</span>
              <span className="tag--date">7m ago</span>
            </div>
        </div>
      </div>
      <div className="item">
        <img src="http://4.bp.blogspot.com/-7YNjnSYdstE/UIURpYBf5QI/AAAAAAAAHv0/4ZZA5taIC_4/s1600/cats_kittens_ragdoll_kitten_cat_desktop_1134x850_hd-wallpaper-861351.jpeg" alt="media"/>
      </div>
    </NavLink>
  );
}

export default MediaCard;
