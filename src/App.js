import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './__views__/layout/Nav';
import Home from './__views__/Home';
import NewDetails from './__views__/news/NewDetails';
import Category from './__views__/news/Category';
import Footer from './__views__/layout/Footer';
import './__styles__/main.scss';

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/new/:id" component={ NewDetails }/>
          <Route path="/category/name" component={ Category }/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
