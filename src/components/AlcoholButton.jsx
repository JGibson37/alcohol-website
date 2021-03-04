import axios from "axios";
import React, { Component } from "react";

export default class AlcoholButton extends Component {
  state = {
    alcoholDetails: [],
  };

  fetchAlcohol = async () => {
    const options = {
      method: "GET",
      url: "https://the-cocktail-db.p.rapidapi.com/random.php",
      headers: {},
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.setState({ alcoholDetails: response.data.drinks[0] });
        console.log(this.state.alcoholDetails);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchAlcohol}>Fetch Random Alcohol</button>
        <ul>
          {!this.state.alcoholDetails ? (
            <div>Please click the button</div>
          ) : (
            <div key={this.state.alcoholDetails.idDrink}>
              {Object.keys(this.state.alcoholDetails).map((key) => (
                <div>
                  Key: {key}, Value:
                  {this.state.alcoholDetails[key]}
                </div>
              ))}
            </div>
          )}
        </ul>
      </div>
    );
  }
}
