var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let content of tabcontent) {
    content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let menubtn = document.getElementsByClassName("menu-btn");
let close = document.getElementsByClassName("fa-xmark");
let nav_bar = document.getElementById("navbar-ul");

menubtn[0].addEventListener("click", () => {
  nav_bar.style.left = "0rem";
});

close[0].addEventListener("click", () => {
  nav_bar.style.left = "-65rem";
});

var typed = new Typed("#element", {
  strings: [
    "Web Developer",
    "App Developer",
    "Coding Enthusiast",
    "Problem Slover",
  ],
  typeSpeed: 120,
  loop: true,
});

// ------------contact-form-------------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxPJcgpjETAlrvMrWFTMaC3L8Ar-9aQhf_BCH7x1DdI1x2krUAJ8xI7QEq24If5eQyx/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Successfully submmited", response, location.reload())
    )
    .catch((error) => console.log("fill the details", error.message));
});

let button = document.querySelector("#toggle");
let toggle_btn = document.querySelector(".toggle-btn");
let body = document.querySelector("body");
let root = document.documentElement;
console.log(body);
let mode = true;
button.addEventListener("click", () => {
  if (mode) {
    button.style.float = "right";
    toggle_btn.style.background = "blue";
    root.style.setProperty("--theme-color", "#bfbbb2");
    root.style.setProperty("--text-color", "black");
    mode = false;
  } else {
    button.style.float = "left";
    toggle_btn.style.background = "grey";
    location.reload();
    mode = true;
  }
});
