import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/">
            Tyler Edge Web Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Info
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/">
                    Pokemon Memory Game
                  </a>
                  <a className="dropdown-item" href="/">
                    Game On
                  </a>
                  <a className="dropdown-item" href="/">
                    Hacker News Scraper
                  </a>
                  <a className="dropdown-item" href="/">
                    Space Trivia
                  </a>
                  <a className="dropdown-item" href="/">
                    Find A Friend App
                  </a>
                  <a className="dropdown-item" href="/">
                    Tasty Burger
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}