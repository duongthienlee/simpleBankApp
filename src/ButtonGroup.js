import React from "react";
import { store } from "./store"
import { setWithDraw } from "./actions"

function dispatchWithDrawAction(e) {
    // Prevent negative balance :)))
    if (store.getState().balance >= e.target.dataset.amount) {
        const amount = e.target.dataset.amount;
        store.dispatch(setWithDraw(amount));
    }
}
const ButtonGroup = ({ amounts }) => (
    <span>
        {amounts.map((amount, i) => (
            <button
                data-amount={amount}
                key={`btn-${i}`}
                onClick={dispatchWithDrawAction}
            >
                WITHDRAW €{amount}
            </button>
        ))}
        <br />
        <button data-amount={store.getState().balance} onClick={dispatchWithDrawAction} className="App__giveaway">Give away all your cash to charity</button>
    </span>
)

export default ButtonGroup;