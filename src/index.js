import React from "react";
import ReactDOM from "react-dom";
import Plugin from "./plugin.js";

const container = document.createElement("div");
container.setAttribute("id", "iconsent");
document.body.appendChild(container);
ReactDOM.render(<Plugin {...window.iconsent} />, container);
