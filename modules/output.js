
const output = document.getElementById("output");
const screen = document.getElementById("screen");

function print(text){
  output.innerHTML += text + "<br>";
  screen.scrollTop = screen.scrollHeight;
}
