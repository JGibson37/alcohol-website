import React from "react";
import AlcoholButton from "./AlcoholButton";

function TrueHeader() {
  const [randomAlcohol, toggleRandom] = React.useState(false);

  const clickForRandom = () => {
    toggleRandom(!randomAlcohol);
  };

  return (
    <div className="navigation-sidebar">
      <nav className="nav-container">
        <h2 className="nav-container-h2">Other Searches</h2>
        <button onClick={clickForRandom}>Random Drink</button>
        <button>Drink Name</button>
        <button>Ingredient Name</button>
      </nav>
      {!randomAlcohol ? "" : <AlcoholButton />}
    </div>
  );
}

export default TrueHeader;
