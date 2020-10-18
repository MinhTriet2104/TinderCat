import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Component
import AsideNavbar from "./AsideNavbar/AsideNavbar";
import MainContent from "./MainContent/MainContent";
<<<<<<< Updated upstream
import Profile from "./Profile/Profile";
import ChangeProfile from "./Profile/ChangeProfile";
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> Stashed changes


// styles
import "./App.scss";
import MainProfile from "./Profile/MainProfile";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
