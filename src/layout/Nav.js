import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default function Nav(props) {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const closeMenu = () => {
    setShow(false);
  };

  const sections = props.sections;
  const sectionList = sections?.length > 0
    ? sections.map((section) => {
        return (
          <li
            className="sidebar-list__item"
            key={section.display_name + Math.random * 300}
          >
            <a
              href={`/section?id=${section.section}`}
              className="sidebar-list__item--text"
            >
              {section.display_name}
            </a>
          </li>
        );
      })
    : null;

  return (
    <>
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
            <a href="/newspaper" className={"radius-btn"}>
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
              <a href="/newspaper" className="sidebar-list__item--text">
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
    </>
  );
}
