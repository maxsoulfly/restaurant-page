import "./style.css";

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const setActiveButton = (button) => {
    document.querySelectorAll("nav button").forEach((btn) => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
};

const homeBtn = document.querySelector("button:nth-child(1)");
const menuBtn = document.querySelector("button:nth-child(2)");
const aboutBtn = document.querySelector("button:nth-child(3)");

homeBtn.addEventListener("click", () => {
    setActiveButton(homeBtn);
    loadHome();
});
menuBtn.addEventListener("click", () => {
    setActiveButton(menuBtn);
    loadMenu();
});
aboutBtn.addEventListener("click", () => {
    setActiveButton(aboutBtn);
    loadAbout();
});

loadHome(); // Load home page by default
setActiveButton(homeBtn);
