import React, { Fragment } from "react";

export default function DrinkDetails({ drink }) {
  const ingredients = [];

  for (let index = 0; index < 15; index++) {
    const measure = drink[`strMeasure${index + 1}`];
    const ingredient = drink[`strIngredient${index + 1}`];

    if (measure !== null || ingredient !== null) {
      ingredients.push({
        spirit: ingredient,
        amount: measure,
      });
    }
  }

  return (
    <div className="space-y-4">
      <div
        className="grid gap-x-4"
        style={{
          gridTemplateColumns: "auto auto",
        }}
      >
        <div className="font-semibold">Drink addded to DB on:</div>
        <div>{drink.dateModified}</div>

        <div className="font-semibold">Drink ID number:</div>
        <div>{drink.idDrink}</div>

        <div className="font-semibold">Drink's Name:</div>
        <div>{drink.strDrink}</div>

        <div className="h-4" style={{ gridColumn: "1 / 2 span" }} />

        <div className="font-semibold">Glass and Instructions:</div>
        <div>{drink.strGlass}</div>

        <div className="h-4" style={{ gridColumn: "1 / 2 span" }} />

        <div className="h-4" style={{ gridColumn: "1 / 2 span" }}>
          {drink.strInstructions}
        </div>

        <div className="h-4" style={{ gridColumn: "1 / 2 span" }} />

        <div className="font-semibold">Ingredients:</div>
        <div className="font-semibold">Amount Needed:</div>

        {ingredients.map((ingredient) => (
          <Fragment>
            <div>{ingredient.spirit}</div>
            <div>{ingredient.amount}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

// {
//   "idDrink": "13899",
//   "strDrink": "3 Wise Men",
//   "strDrinkAlternate": null,
//   "strTags": null,
//   "strVideo": null,
//   "strCategory": "Shot",
//   "strIBA": null,
//   "strAlcoholic": "Alcoholic",
//   "strGlass": "Collins glass",
//   "strInstructions": "put them them in a glass... and slam it to tha head.",
//   "strInstructionsES": null,
//   "strInstructionsDE": "In ein Glas geben... und ab in den Schädel.",
//   "strInstructionsFR": null,
//   "strInstructionsIT": "mettetele in un bicchiere ... E buona fortuna!",
//   "strInstructionsZH-HANS": null,
//   "strInstructionsZH-HANT": null,
//   "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
//   "strIngredient1": "Jack Daniels",
//   "strIngredient2": "Johnnie Walker",
//   "strIngredient3": "Jim Beam",
//   "strIngredient4": null,
//   "strIngredient5": null,
//   "strIngredient6": null,
//   "strIngredient7": null,
//   "strIngredient8": null,
//   "strIngredient9": null,
//   "strIngredient10": null,
//   "strIngredient11": null,
//   "strIngredient12": null,
//   "strIngredient13": null,
//   "strIngredient14": null,
//   "strIngredient15": null,
//   "strMeasure1": "1/3 oz ",
//   "strMeasure2": "1/3 oz ",
//   "strMeasure3": "1/3 oz ",
//   "strMeasure4": null,
//   "strMeasure5": null,
//   "strMeasure6": null,
//   "strMeasure7": null,
//   "strMeasure8": null,
//   "strMeasure9": null,
//   "strMeasure10": null,
//   "strMeasure11": null,
//   "strMeasure12": null,
//   "strMeasure13": null,
//   "strMeasure14": null,
//   "strMeasure15": null,
//   "strImageSource": null,
//   "strImageAttribution": null,
//   "strCreativeCommonsConfirmed": "No",
//   "dateModified": "2016-07-18 22:34:37"
// }
