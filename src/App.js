import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './__views__/layout/Nav';
import Home from './__views__/Home';
import NewDetails from './__views__/news/NewDetails';
import Category from './__views__/news/Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/new/:id" component={ NewDetails }/>
          <Route path="/category/name" component={ Category }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
