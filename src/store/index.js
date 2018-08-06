import { createStore } from "redux";
import reducer from "../reducers";
const initialState = {
    username: "Thien",
    balance: 100000000
}
export const store = createStore(reducer, initialState)

