import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './layout/Nav';
import Home from './__views__/home/Home.js';
import SearchResults from './__views__/news/SearchResults';
import NotFound from './layout/NotFound';
import Category from './__views__/news/Category';
import Footer from './layout/Footer';
import './__styles__/main.scss';

class App extends Component {
  state = {
    sections: []
  }

  componentDidMount() {
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';
    fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${key}`)
    .then(response => response.json())
    .then(data => {
      const allSections = data.results

      const excludeSections = ['multimedia/photos', 'video', 'today’s paper', 'reader center', 'crosswords & games','home & garden', 'home page'];
      const includeSections = allSections.filter(obj => !excludeSections.includes(obj.section));

      this.setState({
        sections: includeSections
      })

      })
  }
  
  render() {
    return(
      <BrowserRouter>
        <Nav sections={this.state.sections}/>
        <div className="app-wrapper container">
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/search-results" component={ SearchResults }/>
            <Route path="/section/:category_name" component={ Category }/>
            <Route component={ NotFound } />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
