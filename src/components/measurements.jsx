import React, { Component } from "react";

export default class measurements extends Component {
  render() {
    return (
      <container className="measurements-container">
        <div>Amount Needed:</div>
        <div className="strMeasure1">2oz</div>
        <div className="strMeasure2">1oz</div>
        <div className="strMeasure3">1 tsp</div>
        <div className="strMeasure4">5</div>
      </container>
    );
  }
}
