import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LikeList.scss";

function LikeList() {
  const likeListFromStore = useSelector((state) => state.likelist);
  const [likeList, setLikelist] = useState([]);

  useEffect(() => {
    setLikelist(likeListFromStore);
  }, [likeListFromStore]);

  const deleteLike = (id) => {
    const findItem = likeList.find((item) => item.id === id);
    const index = likeList.indexOf(findItem);
    const tempLikeList = [...likeList];
    tempLikeList.splice(index, 1);
    setLikelist(tempLikeList);
  }

  const moveUp = (id) => {
    const findItem = likeList.find((item) => item.id === id);
    const index = likeList.indexOf(findItem);

    if (index === 0) return;

    const tempLikeList = [...likeList];
    tempLikeList.splice(index, 1);
    tempLikeList.splice(index - 1, 0, findItem);
    setLikelist(tempLikeList);
  };

  const moveDown = (id) => {
    const findItem = likeList.find((item) => item.id === id);
    const index = likeList.indexOf(findItem);

    if (index === likeList.length - 1) return;
    const tempLikeList = [...likeList];
    tempLikeList.splice(index, 1);
    tempLikeList.splice(index + 1, 0, findItem);
    setLikelist(tempLikeList);
  };
  return (
    <ul className="likeList" id="likeList">
      {likeList.map((like) => (
        <li key={like.id} className="aroundLike">
          <div className="row">
            <div className="col-md-3">
              <img src={like.avatar} alt="avatar" className="avatar" />
            </div>
            <div className="col-md-3">
              <div className="row">
                <b>{like.name}</b>
              </div>
              <div className="row">
                <div className="dateLike">{like.likedAt.slice(0, 10)}</div>
              </div>
            </div>
            <div className="col-md-6">
              <button className="btn btn-link btnLikeList" onClick={() => deleteLike(like.id)}>
                <img
                  src="https://icon-library.com/images/icon-delete/icon-delete-16.jpg"
                  alt="delete"
                  className="iconBtnLikeList"
                />
              </button>
              <button
                className="btn btn-link btnLikeList"
                onClick={() => moveUp(like.id)}
              >
                <img
                  src="https://st2.depositphotos.com/5266903/8456/v/950/depositphotos_84568954-stock-illustration-arrow-up-flat-red-color.jpg"
                  alt="up"
                  className="iconBtnLikeList"
                />
              </button>
              <button
                className="btn btn-link btnLikeList"
                onClick={() => moveDown(like.id)}
              >
                <img
                  src="https://st2.depositphotos.com/5266903/8456/v/950/depositphotos_84568938-stock-illustration-arrow-down-flat-red-color.jpg"
                  alt="down"
                  className="iconBtnLikeList"
                />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LikeList;
