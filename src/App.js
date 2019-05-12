import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./home";
import History from "./our-history";
import "./style.css";

function App() {
  return (
    <React.Fragment>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to="/our-history.js"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            Our History
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/our-history.js" component={History} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
