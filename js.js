const MILES = 0.621371192;
let msgEl = document.getElementById("demo");
let el = document.getElementById('txtInput');

function generate() {

  if (el.value < 1) {

    msgEl.textContent = "Please enter a valid numbers!";
  } else {

      msgEl.textContent = el.value + " km is " + el.value * MILES.toFixed(3) + " miles.";

  }
}

let convertBtnEl = document.getElementById("convert-btn");
convertBtnEl.addEventListener('click', generate, false);

function clearFields() {
  msgEl.textContent = "";
  el.value = "";
}
let cleartBtnEl = document.getElementById("clear-btn");
cleartBtnEl.addEventListener('click', clearFields, false);
