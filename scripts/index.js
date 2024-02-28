
// document.addEventListener("DOMContentLoaded", function () {
//     const element = document.createElement("div");
//     element.style.backgroundColor = "#769656";
//     element.style.width = "200px"
//     element.style.height = "200px"

//     document.getElementsByTagName("div")[0].appendChild(element);
// });

import { initGame } from "../Data/data.js";
import { initGameRender } from "../Render/main.js";
import { GlobalEvent } from "../Events/global.js";

const globalState = initGame();

initGameRender(globalState);
GlobalEvent();

export { globalState };



