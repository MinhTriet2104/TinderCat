import * as types from "../constants/ActionTypes";

const initialState = [];

const superlikelist = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SUPER_LIKE_LIST:
      return [...action.superlikelist];
    case types.ADD_SUPER_LIKE_LIST:
      return [...state, action.cat];
    default:
      return state;
  }
};

export default superlikelist;
