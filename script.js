function calculate() {
  let grammar = Number(document.getElementById("grammar").value);
  let literature = Number(document.getElementById("literature").value);
  let writing = Number(document.getElementById("writing").value);
  let oral = Number(document.getElementById("oral").value);

  let average = (grammar + literature + writing + oral) / 4;

  document.getElementById("result").innerHTML =
    "Your Average is: " + average.toFixed(2);
}
