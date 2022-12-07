/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var minNumber = 1; // The minimum number you want
  var maxNumber = 3; // The maximum number you want
  var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
  if (randomnumber == 1) {
    randomnumber = "♥";
    document.getElementsByClassName("topcardsymbol")[0].style.color = "red";
    document.getElementsByClassName("bottomcardsymbol")[0].style.color = "red";
  }
  if (randomnumber == 2) {
    randomnumber = "♦";
    document.getElementsByClassName("topcardsymbol")[0].style.color = "red";
    document.getElementsByClassName("bottomcardsymbol")[0].style.color = "red";
  }
  if (randomnumber == 3) {
    randomnumber = "♣";
    document.getElementsByClassName("topcardsymbol")[0].style.color = "black";
    document.getElementsByClassName("bottomcardsymbol")[0].style.color =
      "black";
  }
  if (randomnumber == 4) {
    randomnumber = "♠";
    document.getElementsByClassName("bottomcardsymbol")[0].style.color =
      "black";
  }
  document.getElementsByClassName("topcardsymbol")[0].innerHTML = randomnumber;
  document.getElementsByClassName(
    "bottomcardsymbol"
  )[0].innerHTML = randomnumber;

  return false; // Returns false just to tidy everything up
};

const prev_handler = window.onload;
window.onload = function() {
  if (prev_handler) {
    prev_handler();
    // write your code here
    var minNumber = 1; // The minimum number you want
    var maxNumber = 12; // The maximum number you want
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    if (randomnumber == 1) {
      randomnumber = "A";
    }
    if (randomnumber == 11) {
      randomnumber = "J";
    }
    if (randomnumber == 12) {
      randomnumber = "Q";
    }
    if (randomnumber == 13) {
      randomnumber = "K";
    }
    document.getElementById("myNumber").innerHTML = randomnumber;
    return false; // Returns false just to tidy everything up
  }
};
