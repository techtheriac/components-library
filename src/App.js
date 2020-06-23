import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton modifiers={["large"]}>Secondary</SecondaryButton>
    <GlobalStyle />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
