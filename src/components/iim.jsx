import React from "react";

export default function iim(props) {
  const drink = props.searchedDrink;
  return (
    <container className="drink-containers">
      <container className="instructions-container">
        <div>Glass and Instructions:</div>
        <div class="strGlass">{drink.strGlass}</div>
        <div class="instructions">{drink.instructions}</div>
      </container>
      <container className="ingredients-container">
        <div>Ingredients:</div>
        <div class="strIngredient1">{drink.strIngredient1}</div>
        <div class="strIngredient2">{drink.strIngredient2}</div>
        <div class="strIngredient3">{drink.strIngredient3}</div>
        <div class="strIngredient4">{drink.strIngredient4}</div>
        <div class="strIngredient5">{drink.strIngredient5}</div>
      </container>
      <container className="measurements-container">
        <div>Amount Needed:</div>
        <div className="strMeasure1">{drink.strMeasure1}</div>
        <div className="strMeasure2">{drink.strMeasure2}</div>
        <div className="strMeasure3">{drink.strMeasure3}</div>
        <div className="strMeasure4">{drink.strMeasure4}</div>
      </container>
    </container>
  );
}
