/* eslint-disable react/prop-types */
import { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__top">
          <img src={this.props.img} alt="avatar" />
          <div className="card__top-info">
            <p>{this.props.name}</p>
            <p>{this.props.verification}</p>
          </div>
        </div>
        <div className="card__bottom">
          <p className="review">{this.props.review}</p>
        </div>
      </div>
    );
  }
}
