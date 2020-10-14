import React from "react";

// Component
import AsideNavbar from "./AsideNavbar/AsideNavbar";
import MainContent from "./MainContent/MainContent";

// styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <AsideNavbar />
      <MainContent />
    </div>
  );
}

export default App;
