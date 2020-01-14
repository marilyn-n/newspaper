import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { withRouter } from 'react-router-dom';

class Nav extends Component {
  state = {
    scrolled: false,
    show: false
  }

  componentDidMount() {

    const stickyNav = () => {
      let isTop = window.scrollY >= 0;
      const appWrapper = document.querySelector('.app-wrapper');

      if(isTop !== true ) {
        this.setState({ scrolled: true })
      } else {
        appWrapper.style.paddingTop = '55px';
        this.setState({ scrolled: true })
      }
    }

    window.addEventListener('scroll', stickyNav);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
 
  toggleSidebar = () => {
     this.state.show === false ?
      this.setState({
        show: true
      })
    :
      this.setState({
        show: false
      })
  }

  closeMenu = () => {
    document.querySelector('.sidebar-wrapper').classList.add('d-none');
  }

  render() { 
    const pathName = this.props.history.location.pathname;
    const sections = this.props.sections
    const sectionList = sections.length ?
    (
      sections.map(section => {
        return(
          <li className="sidebar-list__item" key={section.section}>
            <a href={`/section/${section.section}`} className="sidebar-list__item--text">{ section.display_name }</a>
          </li>
        )
      })
    ): (null)

    const showSidebar = this.state.show
    return (
      <div>
      <div className={this.state.scrolled ? 'nav-wrapper scrolled' : 'nav-wrapper' }>
        <nav>
          <div className="py-2 px-3 d-flex w-100">
            <button className="nav-link btn btn-light mr-2" onClick={this.toggleSidebar}>
              <i className="fas fa-bars text-dark"></i>
            </button>
            <SearchBar/>
            <Link to={'/'} className={pathName === '/' ? "d-none" : "radius-btn" }>
              <i className="far fa-newspaper"></i>
            </Link>
          </div>
        </nav>
      </div>
      <div className={ showSidebar ? 'sidebar-wrapper' : 'd-none' } onMouseLeave={this.toggleSidebar}>
        <div className="list-group">
          <ul className="sidebar-list">
            <li className="sidebar-list__item">
              <a href="/" className="sidebar-list__item--text">Home Page</a>
            </li>
            { sectionList }
          </ul>
        </div>
        {
          window.innerWidth <= 575.98 ? <i className="fas fa-times" onClick={this.closeMenu}></i> : ''
        }
        
      </div>
      </div>
    )
  }
}

export default withRouter(Nav);