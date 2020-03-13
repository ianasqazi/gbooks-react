import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    </div>
  );
}

export default App;
