
const input = document.getElementById("command");
const prompt = document.getElementById("prompt");

input.addEventListener("keydown", function(e){

  if(e.key !== "Enter") return;

  let cmd = input.value.trim();
  print(prompt.textContent + " " + cmd);
  input.value = "";

  if(handleLogin(cmd)) return;

  runCommand(cmd);
});
