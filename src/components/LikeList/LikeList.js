import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LikeList.scss";

function LikeList() {
  const likeList = useSelector((state) => state.likelist);
  console.log(likeList);
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
              <button className="btn btn-link btnLikeList">
                <img
                  src="https://icon-library.com/images/icon-delete/icon-delete-16.jpg"
                  alt="delete"
                  className="iconBtnLikeList"
                />
              </button>
              <button className="btn btn-link btnLikeList">
                <img
                  src="https://st2.depositphotos.com/5266903/8456/v/950/depositphotos_84568954-stock-illustration-arrow-up-flat-red-color.jpg"
                  alt="up"
                  className="iconBtnLikeList"
                />
              </button>
              <button className="btn btn-link btnLikeList">
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