import axios from "axios";
import * as types from "../constants/ActionTypes";

const initialState = {
    currentUser: {}
  }
  
  export default function signup(state = initialState, action) {
      switch (action.type) {
        case types.LOGIN_USER:
          return {...state, currentUser: action.payload}
        default:
          return state;
      }
    }
