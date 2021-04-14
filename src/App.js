import React from "react";
import AlcoholButton from "./components/AlcoholButton";
import IngredientSearch from "./components/IngredientSearch";
import CocktailSearch from "./components/CocktailSearch";

const views = ["home", "random-drink", "ingredient-search", "cocktail-search"];

const Home = () => {
  return <div>home</div>;
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
