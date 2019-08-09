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
        <div className="card">
          <div className="row">
            <div className="card-body col-sm-12">
              <h4 className="card-title">Projects</h4>
              <Wrapper>
            {this.state.cards.map(card => (
          <Card
            id={card.id}
            key={card.id}
            image={card.image}
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