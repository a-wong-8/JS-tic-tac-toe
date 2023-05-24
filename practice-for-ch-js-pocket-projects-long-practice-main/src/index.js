import * as warmUp from "./warmup";
import Clock from "./clock.js";
import * as dropDown from "./drop_down.js";

const clock = new Clock();

dropDown.attachDogLinks();

const dogList = document.querySelector("nav.drop-down-dog-nav")

const dogUl = document.querySelector("ul.drop-down-dog-list")

const children = Array.from(dogUl.children);

dogList.addEventListener("mouseenter", (event) => {
    children.forEach((child) => {
        // child.classList.toggle("show-list");
        child.classList.toggle("dog-link");

    })
})

dogList.addEventListener("mouseleave", (event) => {
    children.forEach((child) => {
        // child.classList.toggle("show-list");
        child.classList.toggle("dog-link");

    })
})