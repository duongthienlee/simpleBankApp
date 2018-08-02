import React from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import { createStore } from "redux"
import reducer from "./reducers"
const initialState = {
  username: "Thien",
  totalAmount: 100000000
}
const store = createStore(reducer, initialState)
const state = store.getState();
const App = () => {
  const { totalAmount, username } = state;
  return (
    <div className="App">
      <img className="App__userpic" src={photographer} alt="user" />
      <p className="App__username">Hello, {username}! </p>
      <div className="App__amount">
        {formatNumber({ prefix: "€" })(totalAmount)}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <button data-amount="10000">WITHDRAW €10,000</button>
        <button data-amount="5000">WITHDRAW €5,000</button>
      </section>

      <p className="App__giveaway">Give away all your cash to charity</p>
    </div>
  );

}

export default App;
