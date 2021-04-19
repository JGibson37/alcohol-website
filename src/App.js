import React from "react";
import AlcoholButton from "./components/AlcoholButton";
import IngredientSearch from "./components/IngredientSearch";
import CocktailSearch from "./components/CocktailSearch";

const views = ["home", "random-drink", "ingredient-search", "cocktail-search"];

const Home = () => {
  return (
    <div>
      <h1 className="flex justify-center text-5xl font-bold">Alcohol Search</h1>
      <br></br>
      <p>
        Welcome to my small search engine I built. If you're feeling lucky try
        Random-Drink. If you want to know more about an ingredient, try
        Ingredient-Search. If you want to find a specific drink, try
        Cocktail-Search. Searching can be a little hard if you don't spell your
        drink or ingredient exactly correct. As such I've provided you with a
        few example searches so you can explore the functionality yourself.
      </p>
      <br></br>
      <div className="grid gap-y-4" style={{ gridTemplaterows: "auto auto" }}>
        <p className="text-lg font-bold">Ingredient-Search Examples:</p>
        <ul>
          <li>Gin</li>
          <li>Vodka</li>
          <li>Whiskey</li>
        </ul>
        <p className="text-lg font-bold">Cocktail-Search Examples:</p>
        <ul>
          <li>Absolut Summertime</li>
          <li>Atlantic Sun</li>
          <li>Moranguito</li>
        </ul>
      </div>
    </div>
  );
};

function App() {
  const [currentView, setCurrentView] = React.useState("home");

  return (
    <div
      className="grid w-screen h-screen"
      style={{
        gridTemplateColumns: "1fr 6fr",
        gridTemplateAreas: `
        "sidebar content"
      `,
      }}
    >
      <div
        className="flex flex-col space-y-2 p-2"
        style={{ gridArea: "sidebar" }}
      >
        {views.map((view) => (
          <button
            className="bg-gray-200"
            onClick={() => {
              setCurrentView(view);
            }}
          >
            {view}
          </button>
        ))}
      </div>

      <div className="p-2" style={{ gridArea: "content" }}>
        {currentView === "home" && <Home />}
        {currentView === "random-drink" && <AlcoholButton />}
        {currentView === "ingredient-search" && <IngredientSearch />}
        {currentView === "cocktail-search" && <CocktailSearch />}
      </div>
    </div>
  );
}

export default App;
