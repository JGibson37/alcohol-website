import React, { Component } from "react";

export default class nameImage extends Component {
  render() {
    return (
      <container class="name-image-container">
        <img
          class="drink-img"
          src="https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg"
        />
        <container class="name-container">
          <div class="dateModified:">2016-04-28</div>
          <div class="idDrink">15675</div>
          <div class="strDrnk">A Midsummernight Dream</div>
        </container>
      </container>
    );
  }
}
