// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

import {div} from "../../El/El.js";

function Tab(topic) {
    let topicFixed = topic;
    // Since they don't match in the data, I'll have to fix it myself.
    if (topic === "node.js") {
        topicFixed = "node";
    }
    return div("tab").text(topic).onClick(() => setCardFilter(topicFixed)).done();
}

function setCardFilter(topic) {
    document.querySelectorAll(".card").forEach(card => {
        if (topic === null) {
            card.style.display = null;
        } else if (card.dataset.topic === topic) {
            card.style.display = null;
        } else if (card.dataset.topic !== topic) {
            card.style.display = 'none';
        }
        console.log(card.dataset.topic, card.style.display);
    });
}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(res => {
        let topicsElement = document.querySelector(".topics");
        res.data.topics.forEach(topic => topicsElement.appendChild(Tab(topic)));
    });
