import * as types from "../constants/ActionTypes";

const initialState = [];

const likelist = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LIKE_LIST:
      return [...action.likelist];
    default:
      return state;
  }
};

export default likelist;
