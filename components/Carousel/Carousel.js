/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

import {div, img} from "../../El/El.js";

const images = [ 
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg",
];

function wrap(x, n) {
    return ((x % n) + n) % n;
}

function Carousel(images) {
    const imageEls = images.map(src => img(src));
    const carousel = div("carousel");

    let curIdx = 0;
    imageEls[0].element.style.display = 'initial';
    const changeImage = function(direction) {
        if (direction != 0) {
            const dir = direction / Math.abs(direction);
            const nextIdx = wrap(curIdx + dir, images.length);

            imageEls[curIdx].element.style.display = null;
            imageEls[nextIdx].element.style.display = 'initial';

            curIdx = nextIdx;
        }
    };

    carousel.children([
        div("left-button").text("<").onClick(() => changeImage(-1)),
        ...imageEls,
        div("right-button").text(">").onClick(() => changeImage(1)),
    ]);
    return carousel.done();
}

document.querySelector(".carousel-container").appendChild(Carousel(images));
