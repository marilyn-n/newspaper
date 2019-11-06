import React, { Component } from 'react';
import Briefing from '../__views__/Briefing';
import MediaCard from '../__ui_components__/MediaCard';
import GraphicCard from '../__ui_components__/GraphicCard';
import ArticleCard from '../__ui_components__/ArticleCard';
import MiniArticleCard from '../__ui_components__/MiniArticleCard';
import QuoteCard from '../__ui_components__/QuoteCard';
import BlockArticle from '../__ui_components__/BlockArticle';
import Header from '../layout/Header';
import MiniNav from '../layout/MiniNav';
import { Link } from 'react-router-dom';

class Home extends Component {

  state = {
    home: [],
    topHomeNews: [],
    bottomHomeNews: []
  }

  componentDidMount() {
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`)
    .then(response => response.json())    
    .then(data => {
      const results = data.results;
      const half = Math.ceil(results.length / 2);

      this.setState({
        home: results,
        topHomeNews: results.slice(0, half),
        bottomHomeNews: results.slice(half, results.length)
      })
    })
  }

  render() {
    const topHomeNews = this.state.topHomeNews;
    const mainNewscolumn = topHomeNews.slice(0, Math.floor(topHomeNews.length / 2));
    const secondaryNewsColsmn = topHomeNews.slice(Math.floor(topHomeNews.length / 2), topHomeNews.length);
    
    const mainColumnList = mainNewscolumn.length ?
    (
      mainNewscolumn.map((item, index) => {
        if(index === 0) {
          return(
            <Link to="/category:id/new:id" className="graphic-card anchor">
              <div className="graphic-card__section pr-3">
                <div className="graphic-card__header">
                  <span className="graphic-card__header--title">
                    { item.title }
                  </span>
                </div>
                <div className="graphic-card__body">
                  <div className="graphic-card__body__paragraph">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ip
                    sa quae ab illo inventore veritatis et quasi architecto beatae 
                    vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia vol
                    uptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                    porro.
                    <div className="graphic-card__body__paragraph--tags">
                      <span>Top news</span>
                      <span>1 week ago</span>          
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic-card__section pl-3">
                <img src="https://www.wikihow.com/images/6/64/Stop-a-Dog-from-Jumping-Step-6-Version-2.jpg" alt="graphic"/>
                <span className="graphic-card__section--caption">iStock by Getty Images</span>
              </div>
            </Link>
          )
        }

        if(index === 1) {
          return(
            <div>
              <div className="single-divider"></div>
              <Link to="/category:id/new:id" className="block-article anchor">
                <div className="block-article__header">
                  <h3 className="block-article__header--label-lg">{ item.title }</h3>
                </div>
                <div className="block-article__body">
                  <p className="block-article__body--paragraph">
                    Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <span className="block-article__body__tags">
                    <span>
                      T-Magazine
                    </span>
                    <span>
                      28m ago
                    </span>
                  </span>
                </div>
              </Link>
              <div className="single-divider"></div>
            </div>
          )
        } 
        
        if(index === 2) {
          return(
            <div>
              <Link to="/category:id/new:id" className="block-article anchor">
                <div className="block-article__header">
                  <h3 className="block-article__header--label-lg">{ item.title }</h3>
                </div>
                <div className="block-article__body">
                  <p className="block-article__body--paragraph">
                    Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <span className="block-article__body__tags">
                    <span>
                      T-Magazine
                    </span>
                    <span>
                      28m ago
                    </span>
                  </span>
                </div>
              </Link>
              <div className="single-divider"></div>
            </div>
          )
        } 
        if(index > 2 && index < 5){
          return(
              <Link to="/category:id/new:id" className="article-card anchor">
                <div className="article-card__header">
                  <img src="https://www.hdwallpapersfreedownload.com/uploads/large/animals/rabbit-background.jpg"/>
                </div>
                <div className="article-card__body">
                  <h2 className="article-card__body--title">
                    { item.title }
                  </h2>
                  <p className="article-card__body--paragraph">
                    Losing a pregnancy might be the loneliest experience that millions of women have faced.
                  </p>
                  <div className="article-card__body__details">
                    <span className="article-card__body__details--date">1w ago</span>
                    <span className="article-card__body__details--author">By Ravi Kalia and Claudia Casas</span>
                  </div>
                </div>
              </Link>
          )
        } else{
          return(
            <Link to="/category:id/new:id" className="mini-article-card anchor">
              <div className="mini-article-card__header">
                <span className="mini-article-card__header--label">
                  Politics
                </span>
                <img src="https://www.gannett-cdn.com/-mm-/d45a1bc902cb3f4367b332e27f859c7252d4b7fa/c=0-109-2119-1306/local/-/media/2017/03/02/USATODAY/USATODAY/636240538720039138-GettyImages-509934328.jpg?width=3200&height=1680&fit=crop" alt="mini-img"/>
              </div>
              <div className="mini-article-card__body">
                <h2 className="mini-article-card__body--title">
                  { item.title }
                </h2>
                <p className="mini-article-card__body__paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <div className="mini-article-card__body__paragraph--tags">
                  <span>Style</span>
                  <span>7m ago</span>
                </div>
              </div>
            </Link>
          )
        }
      })
    ):null


    const homeArticles = this.state.bottomHomeNews
    const homeArticleList = homeArticles.length ?
    (
      homeArticles.map((article) => {        
        return(
          <a className="mini-article-card anchor" key={article.title}>
            <div className="mini-article-card__header">
              <span className="mini-article-card__header--label">
                { article.section }
              </span>
              <img src={article.multimedia[3] ? article.multimedia[3].url: '' } alt="mini-img"/>
            </div>
            <div className="mini-article-card__body">
              <h2 className="mini-article-card__body--title">
                { article.title }
              </h2>
              <div className="mini-article-card__body__paragraph--tags">
                <span>{ article.section }</span>
                <span>7m ago</span>
              </div>
            </div>
          </a>
        )
      })
    ):(null)
    
    return(
      <div className="">
        <Header/>
        <MiniNav/>
        <div className="single-divider mt-0"/>
          <Briefing/>
        <div className="double-divider"/>
        <div className="home-wrapper">
          <div className="news-wrapper py-3">
            <section className="top-stories col-8">
              { mainColumnList }
            </section>
            <section className="opinion col-4">
              <MediaCard/>
              <div className="single-light-divider"></div>
              <div className="d-flex py-2">
                <div className="pr-3 border-right d-flex flex-column justify-content-between">
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                </div>
                <div className="pl-3 d-flex flex-column justify-content-between">
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                </div>
              </div>
              <div className="double-divider"></div>
                <MediaCard/>
              <div className="single-light-divider mb-3"></div>
                <ArticleCard/>
            </section>
            <div className="double-divider"></div>
            <section className="w-100 d-flex flex-wrap justify-content-between">
              <ArticleCard/>
              <ArticleCard/>
              <ArticleCard/>
            </section>
            <div className="double-divider"></div>
            <section className="w-100 d-flex flex-wrap justify-content-between">
              { homeArticleList }
            </section>
            <div className="double-divider"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
