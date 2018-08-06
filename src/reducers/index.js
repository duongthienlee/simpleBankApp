export default (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_WITHDRAW":
            return {
                ...state,
                balance: state.balance - action.amount
            };
        default:
            return state;
    }
}