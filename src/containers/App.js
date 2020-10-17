import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Component
import AsideNavbar from "./AsideNavbar/AsideNavbar";
import MainContent from "./MainContent/MainContent";
import Profile from "./Profile/Profile";
import ChangeProfile from "./Profile/ChangeProfile";


// styles
import "./App.scss";
import MainProfile from "./Profile/MainProfile";

function App() {
  return (
    <div className="App">
      <AsideNavbar />
      <Switch>
        <Route exact path="/" component={MainContent} />
       <MainProfile>  </MainProfile>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
