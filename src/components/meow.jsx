import React, { Component } from "react";

export default class Meow extends Component {
  state = {
    alcoholDetails: [
      { dateModified: "2016-04-28" },
      { idDrink: "15675" },
      { strAlcoholic: "Alcoholic" },
      { strCategory: "Ordinary Drink" },
      { strCreativeCommonsConfirmed: "No" },
      { strDrink: "A midsummernight dream" },
      { strDrinkAlternate: null },
      { strDrinkDE: null },
      { strDrinkES: null },
      { strDrinkFR: null },
      {
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg",
        "strDrinkZH-HANS": null,
        "strDrinkZH-HANT": null,
      },
      { strGlass: "Collins Glass" },
      { strIBA: null },
      { strImageAttribution: null },
      { strImageSource: null },
      { strIngredient1: "Vodka" },
      { strIngredient10: null },
      { strIngredient11: null },
      { strIngredient12: null },
      { strIngredient13: null },
      { strIngredient14: null },
      { strIngredient15: null },
      { strIngredient2: "Kirschwasser" },
      { strIngredient3: "Strawberry liqueur" },
      { strIngredient4: "Strawberries" },
      { strIngredient5: "Schweppes Russchian" },
      { strIngredient6: null },
      { strIngredient7: null },
      { strIngredient8: null },
      { strIngredient9: null },
      {
        strInstructions:
          "Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water",
      },
      {
        strInstructionsDE:
          "Die Erdbeeren in einem Mixer mischen. Gießen Sie sie zusammen mit Wodka, Kirch und Erdbeerlikör über Eis in einen Shaker. Gut schütteln und ein Highball Glas einfüllen. Füllen Sie das russische Wasser auf.",
      },
      { strInstructionsES: null },
      {
        strInstructionsFR: null,
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
      },
      { strMeasure1: "2 oz " },
      { strMeasure10: null },
      { strMeasure11: null },
      { strMeasure12: null },
      { strMeasure13: null },
      { strMeasure14: null },
      { strMeasure15: null },
      { strMeasure2: "1 oz " },
      { strMeasure3: "1 tsp " },
      { strMeasure4: "5 " },
      { strMeasure5: null },
      { strMeasure6: null },
      { strMeasure7: null },
      { strMeasure8: null },
      { strMeasure9: null },
      { strTags: null },
      { strVideo: null },
    ],
  };

  renderAllDetails = () => {
    this.state.alcoholDetails.forEach((element) => {
      if (element != null) {
        return <div>{element}</div>;
      }
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.renderAllDetails}>
          Push me to print console log
        </button>
        <div>{this.renderAllDetails}</div>
      </div>
    );
  }
}
