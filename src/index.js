import "./style.css";
import { initApp } from "./modules/appController";
import { renderApp } from "./modules/domController";

// initialize app (load from storage or create default)
initApp();

// render UI
renderApp();