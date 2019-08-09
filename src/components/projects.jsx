import React, { Component } from "react";
import "./style.css";

export default class card extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="row">
            <div className="card-body col-sm-12">
              <h4 className="card-title">Projects</h4>
              <p>Pokemon Memory Game</p>
              <p>Game On</p>
              <p>Hacker News Scraper</p>
              <p>Space Trivia</p>
              <p>Find A Friend App</p>
              <p>Tasty Burger</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
