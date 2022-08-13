/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let subject = who[Math.floor(Math.random() * who.length)];
  let action = what[Math.floor(Math.random() * what.length)];
  let time = when[Math.floor(Math.random() * when.length)];
  let txt = subject + " " + action + " " + time + ".";
  return txt;
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const h1 = document.querySelector("#excuse");
  h1.innerHTML = generateExcuse();
};
