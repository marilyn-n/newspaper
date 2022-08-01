import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const SearchBar = () => {
  const [results, setResults] = useState([]);

  const search = (e) => {
    e.preventDefault();
    const nytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    const query = e.target.firstChild.value;
    console.log(query);
    const sortBy = "sort=newest";
    const facet = "facet=true";
    const key = "api-key=PBgITfXgkBCpszcYJifHtpDtqoe18dqN";
    const url = `${nytUrl}q=${query}&fq=headline:("${query}")&${facet}&${sortBy}&${key}`;

    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.response.docs[0]);
        // if (data.response.docs.length) {
        //   this.props.history.push({
        //     pathname: "/search-results",
        //     results: data,
        //     searchTerm: query,
        //   });
        // } else {
        //   this.props.history.push("/not-found");
        // }
      })
      .catch((err) => err);
  };

  console.log(results);

  return (
    <div className="search-bar">
      <form onSubmit={(e) => search(e)}>
        <input
          type="text"
          name="search"
          className="form-control"
          placeholder="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;

// class SearchBar extends Component {
//   concatStr = (str) => {
//     const words = str.split(" ");
//     return words.join("+");
//   };

//   search = (e) => {
//     e.preventDefault();
//     const nytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
//     const query = e.target.firstChild.value;
//     const sortBy = "sort=newest";
//     const facet = "facet=true";
//     const key = "api-key=PBgITfXgkBCpszcYJifHtpDtqoe18dqN";
//     const url = `${nytUrl}q=${this.concatStr(
//       query
//     )}&fq=headline:("${this.concatStr(query)}")&${facet}&${sortBy}&${key}`;

//     fetch(`${url}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.response.docs[0], "----Z");

//         if (data.response.docs.length) {
//           this.props.history.push({
//             pathname: "/search-results",
//             results: data,
//             searchTerm: query,
//           });
//         } else {
//           this.props.history.push("/not-found");
//         }
//       })
//       .catch((err) => err);
//   };

//   render() {
//     return (
//       <div className="search-bar">
//         <form onSubmit={this.search}>
//           <input
//             type="text"
//             name="search"
//             className="form-control"
//             placeholder="search"
//           />
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;
