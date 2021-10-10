import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BunnyRunner from "./bunny_runner";
import StackIt from "./stack_it";
import RadiusRaid from "./radius_raid";
import App from "./App";
ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/bunny">
          <BunnyRunner />
        </Route>
        <Route path="/stack-it">
          <StackIt />
        </Route>
        <Route path="/raid">
          <RadiusRaid />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
