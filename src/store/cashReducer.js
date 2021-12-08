/** @format */

const defState = {
  cash: 0,
};

const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";

export const cashReducer = (state = defState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const plusCash = (payload) => ({ type: ADD_CASH, payload });
export const minusCash = (payload) => ({ type: GET_CASH, payload });
