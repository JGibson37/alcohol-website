import React, { useEffect } from "react";
import axios from "axios";
import DrinkDetails from "./DrinkDetails";

function AlcoholButton() {
  const [alcohol, setAlcohol] = React.useState({});

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
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-semibold">Random Alcohol</h1>
      <div className="flex space-x-4">
        <img className="w-1/4" alt="" src={alcohol.strDrinkThumb} />
        <DrinkDetails drink={alcohol} />
      </div>
    </div>
  );
}

export default AlcoholButton;
