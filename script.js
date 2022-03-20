"use strict";
window.addEventListener("DOMContentLoaded", checkBox);

let darkmode = false;

const checkbox = document.querySelector("#checkbox");

function checkBox() {
  document.documentElement.classList.remove("dark-mode");
  checkbox.checked = false;
}

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

console.log(useDark);

function toggleDarkMode(state) {
  let theme = document.documentElement.classList.toggle("dark-mode", state);

  console.log("theme", theme);
}

console.log(checkbox);

checkbox.addEventListener("change", () => {
  document.documentElement.classList.toggle("dark-mode");

  if (checkbox.checked == true) {
   
    graphic.animate(rising, risingP);
   
    document.querySelector("#graphic").classList.remove("sun_graphics");
    document.querySelector("#graphic").classList.add("moon_graphics");
 
  
    document.querySelectorAll("#product_graphic").forEach((graphic) => graphic.classList.remove("product_sun_graphics"));
    document.querySelectorAll("#product_graphic").forEach((graphic) => graphic.classList.add("small_moon_graphics"));
    
  }
  if (checkbox.checked == false) {
    document.querySelector("#graphic").classList.remove("moon_graphics");

    document.querySelectorAll("#product_graphic").forEach((graphic) => graphic.classList.remove("small_moon_graphics"));
    document.querySelectorAll("#product_graphic").forEach((graphic) => graphic.classList.add("product_sun_graphics"));
    document.querySelector("#graphic").classList.add("sun_graphics");

    graphic.animate(rising, risingP);
  }
});

const graphic = document.querySelector(".sun_graphics");


const rising = [{ transform: "translate(500px,400px)" }, { transform: "translate(0)" }];

const risingP = {
  duration: 1345,
  iterations: 1,
};


