import React from "react";
import HomePage from "./homePage";
import ReactRedux from "./ReactRedux";
import Maps from "./maps/Maps.component";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/react-redux-example">React-Redux Example</Link>
            </li>
            <li>
              <Link to="/maps">Maps</Link>
            </li>
          </ul>
        </nav>

        <div style={{'marginLeft':'20%'}}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/react-redux-example">
            <ReactRedux />
          </Route>
          <Route exact path="/maps">
            <Maps />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
