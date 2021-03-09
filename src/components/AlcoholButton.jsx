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
              <div>{this.state.alcoholDetails.strDrink}</div>
              <div>{this.state.alcoholDetails.strGlass}</div>
              <div>{this.state.alcoholDetails.strIngredient1}</div>
              <img
                height="200px"
                width="200px"
                src={this.state.alcoholDetails.strDrinkThumb}
                alt="Display"
              />
            </div>
          )}
        </ul>
      </div>
    );
  }
}
