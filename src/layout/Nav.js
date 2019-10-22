import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  state = {
    show: false
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
                <input type="text" name="search" className="form-control w-0" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              </div>
            </div>
          </nav>
        </div>
        <div className={ showSidebar ? 'sidebar-wrapper' : 'd-none' }  onMouseLeave={this.toggleSidebar}>
          <div className="list-group">
            <ul className="sidebar-list">
              <li className="sidebar-list__item">
                <NavLink to="/" className="sidebar-list__item--text">Home Page</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <div className="single-light-divider my-2"></div>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <div className="single-light-divider my-2"></div>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
              <li className="sidebar-list__item">
                <NavLink to="/category:id" className="sidebar-list__item--text">Top News</NavLink>
              </li>
            </ul>
          </div>
        </div>

        </div>
      )
    }
    
}

export default Nav;