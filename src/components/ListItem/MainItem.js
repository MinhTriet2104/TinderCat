import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import Link from "../../common/CustomLink";
import "./MainItem.scss"
// Components
import Actioninfo from "../../components/ActionInfo/ActionInfo";

// styles

// actions
// import {
//   requestSetLikeList,
//   requestSetSuperLikeList,
//   requestAddLikeList,
//   requestAddSuperLikeList,
// } from "../../actions";

// helpers
import { getCats } from "../../helpers";
import ListItem from "./ListItem";

const MainItem = () => {
  const [cats, setCats] = useState([]);
//   const [curCat, setCurCats] = useState(null);

//   const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const catsData = await getCats();
      setCats(catsData);
    })();
  }, []);

//  useEffect(() => {
//     (async () => {
//       const likesData = await getLikes();
//       dispatch(requestSetLikeList(likesData));
//     })();
//   }, [dispatch]);

//   useEffect(() => {
//     (async () => {
//       const superLikesData = await getSuperLikes();
//       dispatch(requestSetSuperLikeList(superLikesData));
//     })();
//   }, [dispatch]);

//   useEffect(() => {
//     if (cats.length) setCurCats(cats[0]);
//   }, [cats]);

//   const updateCatsAfterClick = (arrCats) => {
//     return arrCats.slice(1);
//   };

//   const handleNope = () => {
//     setCats(updateCatsAfterClick(cats));
//   };

//   const handleSuperLike = () => {
//     dispatch(requestAddSuperLikeList(curCat));
//     setCats(updateCatsAfterClick(cats));
//   };

//   const handleLike = () => {
//     dispatch(requestAddLikeList(curCat));
//     setCats(updateCatsAfterClick(cats));
//   };

  return (
    <div className="MainItem">
      <ListItem cats={cats}></ListItem>{" "}
      <Actioninfo />
      <Link to="/">
        <img
          alt="next"
          className="toListItem"
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png"
        />
      </Link>
    </div>
  );
};

export default MainItem;
