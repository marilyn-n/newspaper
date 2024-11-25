import React from 'react';
import moment from 'moment';

const MainNews = ({ news }) => {
    const mainNewscolumn = news.slice(0, Math.floor(news.length / 2));    
    const mainColumnList = mainNewscolumn.length ?
    (
      mainNewscolumn.map((item, index) => {
        if(index === 0) {
          return(
            <div key={item.title}>
              <a href={item.url} target="_blank" className="graphic-card anchor">
                <div className="graphic-card__section">
                  <div className="graphic-card__header">
                    <span className="graphic-card__header--title">
                      { item.title }
                    </span>
                  </div>
                  <div className="graphic-card__body">
                    <div className="graphic-card__body__paragraph">
                      { item.abstract }
                    </div>
                    <div>
                      <span className="tags--topic">{ item.section }</span>
                      <span className="tags--date">{ moment(item.created_date).fromNow() }</span>          
                    </div>
                  </div>
                </div>
                <div className="graphic-card__section">
                  <img src={ item.multimedia[0].url } alt="graphic"/>
                  <span className="caption my-1">
                    { item.multimedia[0].copyright }
                  </span>
                </div>
              </a>
              <div className="double-divider"></div>
            </div>
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
                <div>
                  <span className="tags--topic">
                    { item.section}
                  </span>
                  <span className="tags--date">
                    { moment(item.created_date).fromNow() }
                  </span>
                </div>
              </div>
            </a>
            <div className="single-divider"></div>
          </div>
          )
        }else {
          return (
            <div key={item.title}>
              <a href={item.url} target="_blank" className="graphic-card anchor">
                <div className="graphic-card__section pr-3">
                  <div className="graphic-card__header">
                    <span className="graphic-card__header--title">
                      { item.title }
                    </span>
                  </div>
                  <div className="graphic-card__body">
                    <div className="graphic-card__body__paragraph">
                      { item.abstract }
                    </div>
                    <div>
                      <span className="tags--topic">{ item.section }</span>
                      <span className="tags--date">{ moment(item.created_date).fromNow() }</span>          
                    </div>
                  </div>
                </div>
                <div className="graphic-card__section pl-3">
                  <img src={ item.multimedia[0].url } alt="graphic"/>
                  <span className="caption my-1">
                    { item.multimedia[0].copyright }
                  </span>
                </div>
              </a>
              <div className="single-divider"></div>
            </div>
          )
        }
      })
    ):null

  return (
    <div className="main-column">
      { mainColumnList }
    </div>
  )
}

export default MainNews;
