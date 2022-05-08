/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  randomWebsite();
};

let pronoun = ["My", "Ours", "Your"];

let noun = ["Dog", "Vape", "Lightsaber"];

let verb = ["Bark", "Attack", "Kill"];

var lastItem = pronoun.length;

var selected = Math.floor(Math.random() * lastItem);
var chosen = Math.floor(Math.random() * lastItem);
var highlighted = Math.floor(Math.random() * lastItem);

function randomWebsite() {
  let website = pronoun[selected] + noun[chosen] + verb[highlighted] + ".com";
  document.querySelector("#website").innerHTML = website;
}
