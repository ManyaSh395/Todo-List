import "./style.css";
import { initApp } from "./modules/appController.js";
import { renderApp } from "./modules/DOMController.js";

console.log("index.js loaded");

// initialize app (load from storage or create default)
initApp();
console.log("initApp done");

// render UI
renderApp();
console.log("renderApp done");