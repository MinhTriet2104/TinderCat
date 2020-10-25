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

export const requestAddSuperLikeList = (cat, cb) => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken')

    const data = {
      cat,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const res = await axios.post(
      "http://localhost:8080/superlike",
      data,
      config
    );

    if (res.data.status === 401 && res.data.err === "TokenExpiredError") {
      const res = await axios.post(
        "http://localhost:8080/auth/refresh",
        { refreshToken },
      );
      localStorage.setItem("accessToken", res.data.accessToken);

      return dispatch(requestAddSuperLikeList(cat, cb));
    }
    
    dispatch(addSuperLikeList(res.data));
    alert("Super Like Success");
    cb();
  } catch (err) {
    alert(err);
  }
};

export const addSuperLikeList = (cat) => ({
  type: types.ADD_SUPER_LIKE_LIST,
  cat,
});

//Nhu
export const userPost = (user) => {
  return dispatch => {
    return fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
        } else {
          localStorage.setItem("accessToken", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

const loginUser = (user) => ({
    type: 'LOGIN_USER',
    payload: user
})