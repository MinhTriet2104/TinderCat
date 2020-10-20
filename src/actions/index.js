import axios from "axios";

import * as types from "../constants/ActionTypes";

const API_URL = "https://5f892e6d18c33c0016b30683.mockapi.io/";

export const requestSetLikeList = () => async (dispatch) => {
  const res = await axios.get(API_URL + "likes");
  dispatch(setLikeList(res.data));
};

export const setLikeList = (likelist) => ({
  type: types.SET_LIKE_LIST,
  likelist,
});

export const requestSetSuperLikeList = () => async (dispatch) => {
  const res = await axios.get(API_URL + "superlikes");
  dispatch(setSuperLikeList(res.data));
};

export const setSuperLikeList = (superlikelist) => ({
  type: types.SET_SUPER_LIKE_LIST,
  superlikelist,
});

export const requestAddLikeList = (cat) => async (dispatch) => {
  const res = await axios.post(API_URL + "likes", cat);
  dispatch(addLikeList(res.data));
};

export const addLikeList = (cat) => ({
  type: types.ADD_LIKE_LIST,
  cat,
});

export const requestAddSuperLikeList = (cat) => async (dispatch) => {
  const res = await axios.post(API_URL + "superlikes", cat);
  dispatch(addSuperLikeList(res.data));
};

export const addSuperLikeList = (cat) => ({
  type: types.ADD_SUPER_LIKE_LIST,
  cat,
});