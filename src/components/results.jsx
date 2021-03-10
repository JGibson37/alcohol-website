import container, { Component } from "react";
import Iim from "./iim";
import NameImage from "./nameImage";

export default class results extends Component {
  render() {
    return (
      <container className="results-container">
        <NameImage />
        <Iim />
      </container>
    );
  }
}
