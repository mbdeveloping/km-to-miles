const MILES = 0.621371192;



function generate() {
  var theInput = document.getElementById('txtInput').value;
  var kilometruTxt = "";

  if (theInput < 1) {
    document.getElementById("demo").innerHTML = "Iveskite teisinga reiksme!";
  } else {
    if (theInput == 1) {
      document.getElementById("demo").innerHTML = theInput + " kilometras yra " + theInput * MILES.toFixed(3) + " mylios.";
    }
    else if (theInput < 10) {
      document.getElementById("demo").innerHTML = theInput + " kilometrai yra " + theInput * MILES.toFixed(3) + " mylios.";
    }
    else if (theInput > 9) {
      document.getElementById("demo").innerHTML = theInput + " kilometru yra " + theInput * MILES.toFixed(3) + " mylios.";
    }
  }
}


function isvalyti() {
  document.getElementById("demo").innerHTML = "";
  document.getElementById('txtInput').value = "";
}
