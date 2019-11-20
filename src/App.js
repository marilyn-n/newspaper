import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './layout/Nav';
import Home from './__views__/home/Home.js';
import SearchResults from './__views__/news/SearchResults';
import NotFound from './layout/NotFound';
import Category from './__views__/news/Category';
import Header from './layout/Header.js';
import Footer from './layout/Footer';
import './__styles__/main.scss';

const App = () => {
  return (
      <BrowserRouter>
      <div>
      <Nav/>
        <div className="app-wrapper container">
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/search-results" component={ SearchResults }/>
            <Route path="/not-found" component={ NotFound }/>
            <Route path="/:category_name" component={ Category }/>
          </Switch>
          <Footer/>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
