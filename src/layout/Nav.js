import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

export default function Nav(props) {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const stickyNav = () => {
    let isTop = window.scrollY >= 0;
    const appWrapper = document.querySelector(".app-wrapper");

    if (isTop !== true) {
      setScrolled(false);
    } else {
      appWrapper.style.paddingTop = "55px";
      setScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, [scrolled]);

  const closeMenu = () => {
    document.querySelector(".sidebar-wrapper").classList.add("d-none");
  };

  const sections = props.sections;

  const sectionList = sections.length
    ? sections.map((section) => {
        return (
          <li className="sidebar-list__item" key={Math.random * 300}>
            <a
              href={`/section/${section}`}
              className="sidebar-list__item--text"
            >
              {section}
            </a>
          </li>
        );
      })
    : null;

  return (
    <div>
      <div className={scrolled ? "nav-wrapper scrolled" : "nav-wrapper"}>
        <nav>
          <div className="py-2 px-3 d-flex w-100">
            <button
              className="nav-link btn btn-light mr-2"
              onClick={() => setShow(true)}
            >
              <i className="fas fa-bars text-dark"></i>
            </button>
            <SearchBar />
            <a href="/" className={"radius-btn"}>
              <i className="far fa-newspaper"></i>
            </a>
          </div>
        </nav>
      </div>
      <div
        className={show ? "sidebar-wrapper" : "d-none"}
        onMouseLeave={() => setShow(false)}
      >
        <div className="list-group">
          <ul className="sidebar-list">
            <li className="sidebar-list__item">
              <a href="/" className="sidebar-list__item--text">
                Home Page
              </a>
            </li>
            {sectionList}
          </ul>
        </div>
        {window.innerWidth <= 575.98 ? (
          <i className="fas fa-times" onClick={() => closeMenu()}></i>
        ) : null}
      </div>
    </div>
  );
}
