import {homeDiv} from "./home";
import {menuDiv} from "./menu";
import {contactDiv} from "./contact";
// getting Links
const homeLink = document.querySelector("#home");
const menuLink = document.querySelector("#menu");
const contactLink = document.querySelector("#contact");
const links = document.querySelectorAll("li");
const content = document.querySelector("#content");

//
content.appendChild(homeDiv);

//
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        //function for switching content
    });
});

function changeContent(text) {
    if (text == currentContentText) {
        return;
    }
    if (text == "Home") {
        
    }
}