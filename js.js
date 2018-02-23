const MILES = 0.621371192;



function generate() {
  var theInput = document.getElementById('txtInput').value;
  var kilometruTxt = "";

  if (theInput < 1) {
    document.getElementById("demo").innerHTML = "Please enter a valid numbers!";
  } else {
    if (theInput == 1) {
      document.getElementById("demo").innerHTML = theInput + " km is " + theInput * MILES.toFixed(3) + " miles.";
    }
    else if (theInput < 10) {
      document.getElementById("demo").innerHTML = theInput + " km is " + theInput * MILES.toFixed(3) + " miles.";
    }
    else if (theInput > 9) {
      document.getElementById("demo").innerHTML = theInput + " km is " + theInput * MILES.toFixed(3) + " miles.";
    }
  }
}


function isvalyti() {
  document.getElementById("demo").innerHTML = "";
  document.getElementById('txtInput').value = "";
}
