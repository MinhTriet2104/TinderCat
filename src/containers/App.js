import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Component
import AsideNavbar from "./AsideNavbar/AsideNavbar";
import MainContent from "./MainContent/MainContent";
import CardInfo from "../components/CardInfo/CardInfo";

// styles
import "./App.scss";
import MainProfile from "./Profile/MainProfile";
import MainItem from "../components/ListItem/MainItem";
import Logout from "../components/Logout/Logout";

function App() {
  if (!localStorage.getItem("accessToken")) return <Redirect to="/login" />;

  return (
    <div className="App">
      <AsideNavbar />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route exact path="/list" component={MainItem} />
        <Route exact path="/detail/:id" component={CardInfo} />

        <MainProfile />
      </Switch>
      <div className="Logout">
        {" "}
        <Logout></Logout>
      </div>
    </div>
  );
}

export default App;
