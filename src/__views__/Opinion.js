import React, { Component } from 'react';
import { Author } from '../Helpers.js';


class Opinion extends Component {
  
  render() {
    const opinions = this.props.opinion;
    const topTenOpinions = opinions.slice(0, 11);
    const opinionsColOne = topTenOpinions.slice(0, topTenOpinions.length/ 2);
    const opinionsColTwo = topTenOpinions.slice(Math.floor(topTenOpinions.length/ 2), topTenOpinions.length)
    
    const opinionsListOne = opinions.length ? 
    (
      opinionsColOne.map((item) => {
        return(
          <a href={item.url} target="_blank" className="quote-card anchor" key={item.title}>
            <div className={ item.byline ? "quote-card__quote": "d-none"}>
                <h2 className="quote-card__quote--title">
                  { Author(item.byline) }
                </h2>
                <img src={ item.multimedia[4].url } className="quote-card__quote--author" alt="multimedia"/>      
            </div>
            <div>
              <p className="quote-card__quote--subtitle">
                { item.title }
              </p>
            </div>
          </a>
        )
      })
    ):(null)

    const opinionsListTwo = opinionsColTwo.length ?
    (
      opinionsColTwo.map(item => {
        return(
          <a href={item.url} target="_blank" className="quote-card anchor" key={item.title}>
            <div className={ item.byline ? "quote-card__quote": "d-none"}>
              <h2 className="quote-card__quote--title">
                { Author(item.byline) }
              </h2>
              <img src={ item.multimedia[0].url } className="quote-card__quote--author" alt="multimedia"/>      
            </div>
            <div>
              <p className="quote-card__quote--subtitle">
                { item.title }
              </p>
            </div>
          </a>
        )
      })
    ):(null)
    
    return(
      <div className="opinion-wrapper d-flex">
        <div className="d-flex flex-column pr-3 border-right">
          { opinionsListOne }
        </div>
        <div className="d-flex flex-column pl-3">
          { opinionsListTwo }
        </div>
      </div>
    )
  }
    
}

export default Opinion;
