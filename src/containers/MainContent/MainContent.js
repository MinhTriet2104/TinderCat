import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Link from "../../common/CustomLink";

// Components
import Card from "../../components/Card/Card";
import ActionButton from "../../components/ActionButton/ActionButton";
import Actioninfo from "../../components/ActionInfo/ActionInfo";

// styles
import "./MainContent.scss";

// actions
import {
  requestSetLikeList,
  requestSetSuperLikeList,
  requestAddLikeList,
  requestAddSuperLikeList,
} from "../../actions";

// helpers
import { getCats, getLikes, getSuperLikes } from "../../helpers";

const MainContent = () => {
  const [cats, setCats] = useState([]);
  const [curCat, setCurCats] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const token = await axios.post("http://localhost:8080/auth/login", {
  //         username: "minhtriet2104",
  //         password: "1",
  //       });
  //       setAccessToken(token.data.accessToken);
  //       setRefreshToken(token.data.refreshToken);
  //       localStorage.setItem("accessToken", token.data.accessToken);
  //       localStorage.setItem("refreshToken", token.data.refreshToken);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   if (!accessToken) return;

  //   (async () => {
  //     try {
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       };

  //       const users = await axios.get("http://localhost:8080/users", config);
  //       console.log(users);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, [accessToken]);

  useEffect(() => {
    (async () => {
      const catsData = await getCats();
      setCats(catsData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const likesData = await getLikes();
      dispatch(requestSetLikeList(likesData));
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const superLikesData = await getSuperLikes();
      dispatch(requestSetSuperLikeList(superLikesData));
    })();
  }, [dispatch]);

  useEffect(() => {
    if (cats.length) setCurCats(cats[0]);
  }, [cats]);

  const updateCatsAfterClick = (arrCats) => {
    return arrCats.slice(1);
  };

  const handleNope = () => {
    setCats(updateCatsAfterClick(cats));
  };

  const handleSuperLike = () => {
    dispatch(
      requestAddSuperLikeList(curCat, () => setCats(updateCatsAfterClick(cats)))
    );
    // setCats(updateCatsAfterClick(cats));
  };

  const handleLike = () => {
    dispatch(requestAddLikeList(curCat));
    setCats(updateCatsAfterClick(cats));
  };

  return (
    <div className="MainContent">
      <Link to="/list">
        <img
          alt="next"
          className="toListItem"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Font_Awesome_5_solid_list.svg/1024px-Font_Awesome_5_solid_list.svg.png"
        />
      </Link>

      <Card curCat={curCat}></Card>

      <div className="ButtonsArea">
        <ActionButton handleClick={handleNope}>
          <svg
            height="24px"
            viewBox="0 0 365.71733 365"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient
              id="svg-fill-linear__nope"
              x1="0.14644660940672627"
              x2="0.8535533905932737"
              y1="0.8535533905932737"
              y2="0.1464466094067262"
              spreadMethod="pad"
            >
              <stop offset="0%" stopColor="#ff7854"></stop>
              <stop offset="100%" stopColor="#fd267d"></stop>
            </linearGradient>
            <g fill="url(#svg-fill-linear__nope)">
              <path d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0" />
              <path d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0" />
            </g>
          </svg>
        </ActionButton>

        <ActionButton handleClick={handleSuperLike}>
          <svg
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient
              id="svg-fill-linear__super-like"
              x1="0.14644660940672627"
              x2="0.8535533905932737"
              y1="0.8535533905932737"
              y2="0.1464466094067262"
              spreadMethod="pad"
            >
              <stop offset="0%" stopColor="#08d0ff"></stop>
              <stop offset="100%" stopColor="#3ca4ff"></stop>
            </linearGradient>
            <path
              d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z"
              fill="url(#svg-fill-linear__super-like)"
            />
          </svg>
        </ActionButton>

        <ActionButton handleClick={handleLike}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            width="24px"
            x="0px"
            y="0px"
            viewBox="0 0 435.737 435.737"
          >
            <linearGradient
              id="svg-fill-linear__like"
              x1="0.14644660940672627"
              x2="0.8535533905932737"
              y1="0.8535533905932737"
              y2="0.1464466094067262"
              spreadMethod="pad"
            >
              <stop offset="0%" stopColor="#7cf4f5"></stop>
              <stop offset="100%" stopColor="#01df8a"></stop>
            </linearGradient>
            <path
              fill="url(#svg-fill-linear__like)"
              d="M397.584,56.432c-25.078-25.078-59.037-39.184-95.086-39.184c-30.825,0-60.082,10.449-84.114,29.257
          c-24.033-18.808-53.29-29.257-84.114-29.257c-36.049,0-70.008,14.106-95.086,39.184c-52.245,52.245-52.245,137.404,0,189.649
          L206.89,413.787c3.135,3.135,7.314,4.702,10.971,4.702c4.18,0,7.837-1.567,10.971-4.702l167.706-167.184
          c25.078-25.6,39.184-59.559,39.184-95.086C436.245,115.468,422.661,82.032,397.584,56.432z"
            />
          </svg>
        </ActionButton>
      </div>

      <Actioninfo />
    </div>
  );
};

export default MainContent;
