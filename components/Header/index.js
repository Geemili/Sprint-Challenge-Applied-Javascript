// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

import {div, span, h1} from "../../El/El.js";

function Header() {
    return div("header", [
        span("SMARCH 28, 2019").className("date"),
        h1("Lambda Times"),
        span("98°").className("temp"),
    ]).done();
}

document.querySelector(".header-container").appendChild(Header());
