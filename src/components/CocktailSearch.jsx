import React, { useEffect } from "react";
import axios from "axios";
import DrinkDetails from "./DrinkDetails";

function CocktailSearch() {
  const [cocktailId, setCocktailId] = React.useState("");
  const [cocktailIdToSearch, setCocktailIdToSearch] = React.useState("");
  const [results, setResults] = React.useState({});

  const handleClick = () => {
    setCocktailIdToSearch(cocktailId);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://the-cocktail-db.p.rapidapi.com/lookup.php",
      params: { i: cocktailIdToSearch },
      headers: {},
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setResults(response.data.drinks[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cocktailIdToSearch]);

  return (
    <div>
      <h2 className="flex justify-center">Search for a Cocktail</h2>
      <div className="flex justify-center">
        <input
          className="border-2"
          type="text"
          value={cocktailId}
          onChange={(e) => {
            setCocktailId(e.target.value);
          }}
        />
        <button
          className="bg-gray-200 border-2"
          type="submit"
          onClick={handleClick}
        >
          Search for a Cocktail
        </button>
      </div>
      <div className="flex space-x-4">
        <img className="w-1/4" alt="" src={results.strDrinkThumb} />
        <DrinkDetails drink={results} />
      </div>
    </div>
  );
}

export default CocktailSearch;
