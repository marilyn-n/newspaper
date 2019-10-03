import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
      <div className="nav-wrapper">
        <nav className="navbar navbar-expand">
          <div className="d-flex w-100">
            <div className="nav-link" href="#">
              <i className="fas fa-bars text-dark"></i>
            </div>
            <div>
              <input type="text" name="search" className="form-control w-0" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
          </div>
          <div className="d-flex w-100">
            <NavLink to="/" className="navbar-brand text-dark">
              Newspaper
            </NavLink>
          </div>
        </nav>
      </div>
    );
}

export default Nav;
