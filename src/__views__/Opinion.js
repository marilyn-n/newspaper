import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Opinion extends Component {
  
  render() {
    const author = (str) => str.slice(2, str.length);

    const opinions = this.props.opinion;
    const topTenOpinions = opinions.slice(0, 11);
    const opinionsColOne = topTenOpinions.slice(0, topTenOpinions.length/ 2);
    const opinionsColTwo = topTenOpinions.slice(Math.floor(topTenOpinions.length/ 2), topTenOpinions.length)
    
    const opinionsListOne = opinions.length ? 
    (
      opinionsColOne.map((item) => {
        return(
          <Link to="/category:id/new:id" className="quote-card anchor">
            <div className={ item.byline ? "quote-card__quote": "d-none"}>
                <h2 className="quote-card__quote--title">
                  { author(item.byline) }
                </h2>
                <img src={ item.multimedia[4].url } className="quote-card__quote--author"/>      
            </div>
            <div>
              <p className="quote-card__quote--subtitle">
                { item.title }
              </p>
            </div>
          </Link>
        )
      })
    ):(null)

    const opinionsListTwo = opinionsColTwo.length ?
    (
      opinionsColTwo.map(item => {
        return(
          <Link to="/category:id/new:id" className="quote-card anchor">
            <div className={ item.byline ? "quote-card__quote": "d-none"}>
              <h2 className="quote-card__quote--title">
                { author(item.byline) }
              </h2>
              <img src={ item.multimedia[0].url } className="quote-card__quote--author"/>      
            </div>
            <div>
              <p className="quote-card__quote--subtitle">
                { item.title }
              </p>
            </div>
          </Link>
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
