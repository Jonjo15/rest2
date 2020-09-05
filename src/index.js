import {homeDiv} from "./home";
import {menuDiv} from "./menu";
import {contactDiv} from "./contact";
// getting Links
const buttons = document.querySelectorAll("button");
const content = document.querySelector("#content");

//
content.appendChild(homeDiv);
let currentContentText = "Home";
//
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log("aaaaaaaa");
        changeContent(e.target.textContent);
    });
});

function changeContent(text) {
    if (text == currentContentText) {
        return;
    }
    if (text == "Home") {
        content.firstChild.remove();
        content.appendChild(homeDiv);
        currentContentText = "Home";
    }
    else if(text == "Menu") {
        content.firstChild.remove();
        content.appendChild(menuDiv);
        currentContentText = "Menu";
    }
    else {
        content.firstChild.remove();
        content.appendChild(contactDiv);
        currentContentText = "Contact";
    }
}