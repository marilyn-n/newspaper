import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class MainNews extends Component {
  render() {
    
    const topHomeNews = this.props.topHomeNews;
    const mainNewscolumn = topHomeNews.slice(0, Math.floor(topHomeNews.length / 2));    
    const mainColumnList = mainNewscolumn.length ?
    (
      mainNewscolumn.map((item, index) => {
        if(index === 0) {
          return(
            <a href={item.url} target="_blank" className="graphic-card anchor" key={item.title}>
              <div className="graphic-card__section pr-3">
                <div className="graphic-card__header">
                  <span className="graphic-card__header--title">
                    { item.title }
                  </span>
                </div>
                <div className="graphic-card__body">
                  <div className="graphic-card__body__paragraph">
                    { item.abstract }
                    <div className="graphic-card__body__paragraph--tags">
                      <span>{ item.section }</span>
                      <span>{ moment(item.created_date).fromNow() }</span>          
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic-card__section pl-3">
                <img src={ item.multimedia[4].url } alt="graphic"/>
                <span className="caption">
                  { item.multimedia[4].copyright }
                </span>
              </div>
            </a>
          )
        } else if (index % 3){
          return (
          <div key={item.title}>
            <a href={item.url} target="_blank" className="block-article anchor">
              <div className="block-article__header">
                <h3 className="block-article__header--label-lg">{ item.title }</h3>
              </div>
              <div className="block-article__body">
                <p className="block-article__body--paragraph">
                  { item.abstract }
                </p>
                <span className="block-article__body__tags">
                  <span>
                    { item.section}
                  </span>
                  <span>
                    { moment(item.created_date).fromNow() }
                  </span>
                </span>
              </div>
            </a>
            <div className="single-divider"></div>
          </div>
          )
        }else {
          return (
            <a href={item.url} target="_blank" className="graphic-card anchor" key={item.title}>
              <div className="graphic-card__section pr-3">
                <div className="graphic-card__header">
                  <span className="graphic-card__header--title">
                    { item.title }
                  </span>
                </div>
                <div className="graphic-card__body">
                  <div className="graphic-card__body__paragraph">
                    { item.abstract }
                    <div className="graphic-card__body__paragraph--tags">
                      <span>{ item.section }</span>
                      <span>{ moment(item.created_date).fromNow() }</span>          
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic-card__section pl-3">
                <img src={ item.multimedia[4].url } alt="graphic"/>
                <span className="caption">
                  { item.multimedia[4].copyright }
                </span>
              </div>
            </a>
          )
        }
      })
    ):null

    return(
      <div className="main-column">
        { mainColumnList }
      </div>
    )
  }
}

export default MainNews;
