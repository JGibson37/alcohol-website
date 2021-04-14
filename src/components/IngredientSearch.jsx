import React, { useEffect } from "react";
import axios from "axios";

function IngredientSearch() {
  const [ingredient, setIngredient] = React.useState("");
  const [ingredientToSearch, setIngredientToSearch] = React.useState("");
  const [results, setResults] = React.useState({});

  const handleClick = () => {
    setIngredientToSearch(ingredient);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://the-cocktail-db.p.rapidapi.com/search.php",
      params: { i: ingredientToSearch },
      headers: {},
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setResults(response.data.ingredients[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ingredientToSearch]);

  return (
    <div>
      <h2 className="flex justify-center">Search an Ingredient</h2>
      <div className="flex justify-center">
        <input
          className="border-2"
          type="text"
          value={ingredient}
          onChange={(e) => {
            setIngredient(e.target.value);
          }}
        />
        <button
          className="bg-gray-200 border-2"
          type="submit"
          onClick={handleClick}
        >
          Search For Ingredients
        </button>
      </div>
      <div
        className="grid gap-x-4 max-w-7xl"
        style={{ gridTemplateColumns: "auto auto" }}
      >
        <div className="font-semibold">Name:</div>
        <div>{results.strIngredient}</div>
        <div className="font-semibold">Type Of Ingredient:</div>
        <div>{results.strType}</div>
        <div className="font-semibold">Alcohol?:</div>
        <div>{results.strAlcohol}</div>
        <div className="font-semibold">ABV: </div>
        <div>{results.strABV}</div>
        <div className="font-semibold">Description:</div>
        <div>{results.strDescription}</div>
      </div>
    </div>
  );
}

export default IngredientSearch;
