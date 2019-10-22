import React from 'react';
import { NavLink } from 'react-router-dom';


const ArticleItem = () => {
  return (
    <NavLink to="/category:id/new:id" className="article-item">
      <div className="pr-3 article-item__header">
        <h2 className="article-item__header--title">
          Nicolas Ghesquière, Poster Boy for Fashion-Against-Trump
        </h2>
        <p className="article-item__header--paragraph"> 
          LVMH’s splashy ribbon cutting with the president spurs an angry Instagram post — by one of the company’s own stars.
        </p>
        <span className="article-item__header__tags">
          <span>
            By VANESSA FRIEDMAN
          </span>
          <span>
            Oct. 21, 2019
          </span>
        </span>
      </div>
      <div className="pl-3">
        <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2120,x_0,y_227/f_auto,q_auto,w_1100/v1554729678/shape/mentalfloss/58331-istock-479586616.jpg" alt=""/>
      </div>
    </NavLink>
  );
}

export default ArticleItem;
