import React from "react";
import Measurements from "./measurements";
import Instructions from "./instructions";
import Ingredients from "./ingredients";

export default function iim() {
  return (
    <container className="drink-containers">
      <Instructions />
      <Ingredients />
      <Measurements />
    </container>
  );
}
