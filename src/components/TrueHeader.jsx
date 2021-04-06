import React from "react";
import AlcoholButton from "./AlcoholButton";

function TrueHeader() {
  const [dropBox, toggleDropBox] = React.useState(false);
  const [randomAlcohol, toggleRandom] = React.useState(false);

  const dropBoxClick = () => {
    toggleDropBox(!dropBox);
  };

  const clickForRandom = () => {
    toggleRandom(!randomAlcohol);
  };

  return (
    <div>
      <h2>Other Searches</h2>
      <button onClick={dropBoxClick}>Searches</button>
      {!dropBox ? (
        ""
      ) : (
        <container>
          <div onClick={clickForRandom}>Random Drink</div>
          <div>Drink Name</div>
          <div>Ingredient Name</div>
        </container>
      )}
      {!randomAlcohol ? "" : <AlcoholButton />}
    </div>
  );
}

export default TrueHeader;
