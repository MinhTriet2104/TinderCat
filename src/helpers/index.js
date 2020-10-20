import axios from "axios";

const API_URL = "https://5f892e6d18c33c0016b30683.mockapi.io/";

export const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km

  return d;
};

export const getUser = async () => {
  const user = await axios.get(API_URL + "user/1");
  return user.data;
};

export const getCats = async () => {
  const cats = await axios.get(API_URL + "cats");
  return cats.data;
};

export const getCatInfo = (id) => async () => {
  const catInfo = await axios.get(API_URL + "cats/"+id);
  return catInfo.data;
};

export const getLikes = async () => {
  const likes = await axios.get(API_URL + "likes");
  return likes.data;
};

export const getSuperLikes = async () => {
  const superlikes = await axios.get(API_URL + "superlikes");
  return superlikes.data;
};
