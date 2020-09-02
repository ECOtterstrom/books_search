import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import SaveBooks from "./pages/SaveBooks";
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//import Footer from "./components/Footer"
//import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron>
          <h1><b>Google Book Search</b></h1>
          <p>Search for and Save Books of Interest</p>
        </Jumbotron>
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;