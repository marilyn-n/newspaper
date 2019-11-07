import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  state = {
    show: false,
    sections: ''
  }

  componentDidMount(){
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';
    fetch(`https://api.nytimes.com/svc/news/v3//content/section-list.json?api-key=${key}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        ...this,
        sections: data.results
       })
    })
  }

  toggleSidebar = () => {
    if (this.state.show === false ) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }

  render() {    
    const sections = this.state.sections
    const sectionList = sections.length ?
    (
      sections.map(section => {
        return(
          <li className="sidebar-list__item" key={section.section}>
            <a href={'/' + section.section } className="sidebar-list__item--text">{ section.display_name }</a>
          </li>
        )
      })
    ): (null)

    const showSidebar = this.state.show
    return (
      <div>
      <div className="nav-wrapper">
        <nav className="navbar navbar-expand">
          <div className="d-flex w-100">
            <button className="nav-link btn btn-light mr-2" href="#" onClick={this.toggleSidebar}>
              <i className="fas fa-bars text-dark"></i>
            </button>
            <div>
              <input type="text" name="search" className="form-control w-0" placeholder="Recipient's username" aria-label="Recipient's username"/>
            </div>
          </div>
        </nav>
      </div>
      <div className={ showSidebar ? 'sidebar-wrapper' : 'd-none' }  onMouseLeave={this.toggleSidebar}>
        <div className="list-group">
          <ul className="sidebar-list">
            <li className="sidebar-list__item">
              <Link to="/" className="sidebar-list__item--text">Home Page</Link>
            </li>
            { sectionList }
          </ul>
        </div>
      </div>

      </div>
    )
  }
    
}

export default Nav;