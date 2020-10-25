import { combineReducers } from "redux";

import likelist from "./likelist";
import superlikelist from "./superlikelist";
import signup from "./signup"

const reducer = combineReducers({
  likelist,
  superlikelist,
  signup,
});

export default reducer;
