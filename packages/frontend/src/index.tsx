import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from "smoothscroll-polyfill";

import { App } from "./app";

smoothscroll.polyfill();
ReactDOM.render(<App />, document.getElementById("root"));
