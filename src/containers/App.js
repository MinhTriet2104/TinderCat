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

function App() {
  if (!localStorage.getItem("accessToken")) return <Redirect to="/login" />;

  return (
    <div className="App">
      <AsideNavbar />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route path="/list" component={MainItem} />
        <Route path="/detail/:id" component={CardInfo} />

        <MainProfile />
      </Switch>
    </div>
  );
}

export default App;
