import React from "react";

function nameImage(props) {
  const drink = props.searchedDrink;

  return (
    <container class="name-image-container">
      <img class="drink-img" src={drink.strDrinkThumb} />
      <container class="name-container">
        <div class="dateModified">
          Drink addded to DB on: {drink.dateModified}
        </div>
        <div class="idDrink">Drink ID number: {drink.idDrink}</div>
        <div class="strDrink">Drink's Name:{drink.strDrink}</div>
      </container>
    </container>
  );
}

export default nameImage;
