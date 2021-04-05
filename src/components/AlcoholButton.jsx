import React, { useEffect } from "react";
import axios from "axios";
import Iim from "./iim";
import NameImage from "./nameImage";

function AlcoholButton() {
  const [alcohol, setAlcohol] = React.useState({});
  const [state, updateState] = React.useState(false);

  const handleClick = () => {
    updateState(!state);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://the-cocktail-db.p.rapidapi.com/random.php",
      headers: {},
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response);
        setAlcohol(response.data.drinks[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [state]);

  return (
    <body>
      <h1 class="header">Alcohol Search</h1>
      <container className="search-container">
        <input />
        <button>Search Button</button>
        <button
          className="random-alcohol-button"
          type="button"
          onClick={handleClick}
        >
          Random Alcohol Button
        </button>
      </container>
      <container className="results-container">
        <NameImage searchedDrink={alcohol} />
        <Iim searchedDrink={alcohol} />
      </container>
    </body>
  );
}

export default AlcoholButton;
