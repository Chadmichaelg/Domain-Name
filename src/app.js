/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.onload = function() {
  let domainName = [];
  let pronoun = ["my", "ours"];
  let adj = ["dog", "vape"];
  let verb = ["bark", "attack"];
  let domain = [".com", ".net"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < verb.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainName.push("  " + pronoun[i] + adj[j] + verb[k] + domain[l]);
        }
      }
    }
  }
  console.log(domainName);
  document.getElementById("domain.results").innerHTML = domainName;
};

// window.onload = function() {
//   //write your code here
//   document.querySelector("#button").addEventListener("click", () => {
//     document.querySelector("#domain").innerHTML = domainGen();
//   });
// };
// let domainGen = () => {
//   let who = ["dog", "moon", "yomama", "vape"];
//   let action = ["bark", "attack", "ran", "ate"];
//   let what = [".com", ".org", ".net", ".edu"];

//   let whoIndex = Math.floor(Math.random() * who.length);
//   let actionIndex = Math.floor(Math.random() * action.length);
//   let whatIndex = Math.floor(Math.random() * what.length);

//   return `${who[whoIndex]}${action[actionIndex]}${what[whatIndex]}`;
// };
