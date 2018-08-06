import React from "react";
import formatNumber from "format-number";
import photographer from "./images/avatar.jpeg";
import "./App.css";
import { store } from "./store";
import ButtonGroup from "./ButtonGroup"

const App = () => {

  return (
    <div className="App">
      <img className="App__userpic" src={photographer} alt="user" />
      <p className="App__username">Hello, {store.getState().username}! </p>
      <div className="App__amount">
        {formatNumber({ prefix: "€" })(store.getState().balance)}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <ButtonGroup key={1} amounts={["10000", "5000"]} />

      </section>

    </div>
  );

}

export default App;
