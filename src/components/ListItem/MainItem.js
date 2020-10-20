import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "../../common/CustomLink";

// styles
import "./MainItem.scss";

// actions
import { requestAddLikeList, requestAddSuperLikeList } from "../../actions";

// helpers
import { getCats } from "../../helpers";
import ListItem from "./ListItem";

const MainItem = () => {
  const [cats, setCats] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const catsData = await getCats();
      setCats(catsData);
    })();
  }, []);

  const updateCatsAfterClick = (arrCats) => {
    return arrCats.slice(1);
  };

  const handleNope = () => {
    setCats(updateCatsAfterClick(cats));
  };

  const handleSuperLike = (id) => {
    const curCat = cats.find((cat) => cat.id === id);
    dispatch(requestAddSuperLikeList(curCat));
    setCats(updateCatsAfterClick(cats));
  };

  const handleLike = (id) => {
    const curCat = cats.find((cat) => cat.id === id);
    dispatch(requestAddLikeList(curCat));
    setCats(updateCatsAfterClick(cats));
  };

  return (
    <div className="MainItem">
      <div className="BodyItem">
        {cats.map((cat, index) => (
          <ListItem
            key={index}
            cat={cat}
            handleNope={handleNope}
            handleSuperLike={handleSuperLike}
            handleLike={handleLike}
          />
        ))}
      </div>

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
