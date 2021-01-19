/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import WhyTSJS from "./examples/1.why-ts-js";
import WhyTS from "./examples/1.why-ts";
import Enums from "./examples/3.enum";
import Literals from "./examples/5.lliterals";
import Functions from "./examples/6.functions";

function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <ul className="toc">
            <li>
              <Link to="/why-ts-js">Why TS (JS file)</Link>
            </li>
            <li>
              <Link to="/why-ts">Why TS</Link>
            </li>
            <li>
              <Link to="/enum">Enums</Link>
            </li>
            <li>
              <Link to="/literal">Literals</Link>
            </li>
            <li>
              <Link to="/functions">Functions</Link>
            </li>
          </ul>

          <div className="content">
            <Switch>
              <Route exact path="/">
                Select example
              </Route>
              <Route exact path="/why-ts-js">
                <WhyTSJS />
              </Route>
              <Route exact path="/why-ts">
                <WhyTS />
              </Route>
              <Route exact path="/enum">
                {/* <Enums /> */}
              </Route>
              <Route exact path="/literal">
                {/* <Literals /> */}
              </Route>
              <Route exact path="/functions">
                {/* <Functions /> */}
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
