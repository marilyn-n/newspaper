import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Nav from "./layout/Nav";
import Home from "./__views__/home/Home.js";
import SearchResults from "./__views__/news/SearchResults";
import NotFound from "./layout/NotFound";
import Category from "./__views__/news/Category";
import Footer from "./layout/Footer";
import "./__styles__/main.scss";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    sections: [],
  };

  componentDidMount() {
    const key = "PBgITfXgkBCpszcYJifHtpDtqoe18dqN";
    fetch(
      `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${key}`
    )
      .then((response) => response.json())
      .then((data) => {
        const allSections = data.results;

        const excludeSections = [
          "multimedia/photos",
          "video",
          "today’s paper",
          "reader center",
          "crosswords & games",
          "home & garden",
          "home page",
        ];
        const includeSections = allSections.filter(
          (obj) => !excludeSections.includes(obj.section)
        );

        this.setState({
          sections: includeSections,
        });
      });
  }

  render() {
    return (
      <>
        <Nav
          sections={[
            "multimedia/photos",
            "video",
            "today’s paper",
            "reader center",
            "crosswords & games",
            "home & garden",
            "home page",
          ]}
        />

        {/* <Router>
          <div>
            <div className="app-wrapper container">
              <Routes>
                <Route path="/section/:category_name">
                  <Category />
                </Route>
                <Route path="/search-results">
                  <SearchResults />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Routes>
            </div>
          </div>
        </Router> */}
        <Footer />
      </>
    );
  }
}

export default App;
