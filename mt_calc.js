"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Dajah Medina
   Date:   3.25.19
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/
window.onload = init;
// Initializes the contents of the web page and sets up the event handlers
// Within the function init() I declared the varible calcButtons and got the element by the class name from the html document. I then created a for loop the varible calcButtons and within this, I then put[i] for the array and gave it an onclick even and set the value to buttonClick. From the calcKeys I was then able to go into the array and add an event listener for keydown and for the value I was thn able to get the element by the id  foe calcWindow and added an event listener for keydown and calckeys.
function init() {
      var calcButtons = document.getElementsByClassName("calcButton");
      for (var i = 0; i < calcButtons.length; i++) {
            calcButtons[i].onclick = buttonClick;
      }
      calcKeys[i].addEventListener("keydown") = document.getElementById("calcWindow").addEventListener("keydown", calcKeys);
}
// buttonClick(e) Adds functions to the buttons clicked within the calcutlor. I declared the varibles calcValue ,calcDecimal, and buttonValue and got the elemnets by the id's and created a sitch case for the calcValue.  eraseChar(textStr) Erases the last character from the text string, textStr. evalEq(textStr, decimals) Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter.  lastEq(textStr) Returns the previous expression from the list of expressions in the textStr parameter.
function buttonClick(e) {
      var calcValue = document.getElementById("calcWindow").value;
      var calcDecimal = document.getElementById("decimals").value;
      var buttonValue = e.target.value;
      switch (buttonValue) {
            case "del":
                  calcValue = "";
                  break;
            case "bksp":
                  calcValue = eraseChar(calcValue)
                  break;
            case "enter":
                  calcValue += "=" + evalEq(calcValue, calcDecimal) + "\n";
                  break;
            case "perv":
                  calcValue += lastEq(calcValue) + "\n";
                  break;
            default:
                  calcValue += buttonValue;
                  break;
      }
      document.getElementById("calcWindow").value = calcValue;
      document.getElementById("calcWindow").focus();
}
//  calcKeys(e) Adds functions to key pressed within the calculator window 
function calcKeys(e) {
      var calcValue = document.getElementById("calcWindow").value;
      var calcDecimal = document.getElementById("decimals").value;
      switch (e.key) {
            case "Delete":
                  calcValue = "";
                  break;
            case "enter":
                  calcValue += "=" + evalEq(calcValue, calcDecimal);
                  break;
            case "ArrowUp":
                  calcValue += evalEq(calcWindow.value);
                  e.preventDefault();
      }
      document.getElementById("calcWindow").value = calcValue;
}


/* ===================================================================== */

function eraseChar(textStr) {
      return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
      var lines = textStr.split(/\r?\n/);
      var lastLine = lines[lines.length - 1];
      var eqValue = eval(lastLine);
      return eqValue.toFixed(decimals);
}

function lastEq(textStr) {
      var lines = textStr.split(/\r?\n/);
      var lastExp = lines[lines.length - 2];
      return lastExp.substr(0, lastExp.indexOf("=")).trim();
}