import { combineReducers } from "redux";

import likelist from "./likelist";
import superlikelist from "./superlikelist";

const reducer = combineReducers({
  likelist,
  superlikelist,
});

export default reducer;
