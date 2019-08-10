import React, { Component } from "react";
import Wrapper from './wrapper'
import Card from './card'
import cards from '../cards.json'
import "./style.css";

export default class card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards
    };
  }

  render() {
    return (
      <div>
        <div className="card" id="projects">
          <div className="row">
            <div className="card-body col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h4 className="card-title">Projects</h4>
              <Wrapper>
            {this.state.cards.map(card => (
          <Card
            id={card.id}
            key={card.id}
            image={card.image}
            name={card.name}
            url={card.url}
            summary={card.summary}
          />
          ))}
          </Wrapper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
