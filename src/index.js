import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import RegisterServiceWorker from "./RegisterServiceWorker";
ReactDOM.render (<App/>, document.getElementById ("root"));
RegisterServiceWorker ();