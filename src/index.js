import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BunnyRunner from "./bunny_runner";
import StackIt from "./stack_it";
import RadiusRaid from "./radius_raid";
import App from "./App";
import EvilGlitch from "./evil_glitch";
import Pronto from "./pronto";
import Matrix from "./matrix";
import Boxes from "./boxes";
import FlappyBox from "./flappy_box";
import FlappyBird from "./flappy_bird";
import AirFury from "./air_fury";
import Minesweeper from "./minesweeper";
import SwagShot from "./swagshot";
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
        <Route path="/evil-glitch">
          <EvilGlitch />
        </Route>
        <Route path="/pronto">
          <Pronto />
        </Route>
        <Route path="/matrix">
          <Matrix />
        </Route>
        <Route path="/boxes">
          <Boxes />
        </Route>
        <Route path="/flappy-box">
          <FlappyBox />
        </Route>
        <Route path="/flappy-bird">
          <FlappyBird />
        </Route>
        <Route path="/air-fury">
          <AirFury />
        </Route>
        <Route path="/minesweeper">
          <Minesweeper />
        </Route>
        <Route path="/swagshot">
          <SwagShot />
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
