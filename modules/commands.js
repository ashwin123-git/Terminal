
function runCommand(cmd){

  let parts = cmd.split(" ");
  let base = parts[0];
  let arg = parts[1];

  switch(base){

    case "help":
      print("Commands: ls, pwd, cd, mkdir, rmdir, whoami, clear");
      break;

    case "whoami":
      print(window.user);
      break;

    case "pwd":
      print(pathString());
      break;

    case "ls":
      let list = Object.keys(getDir());
      print(list.join("  ") || "empty");
      break;

    case "mkdir":
      if(!arg) return print("missing name");
      getDir()[arg] = {};
      break;

    case "rmdir":
      if(!arg) return print("missing name");
      delete getDir()[arg];
      break;

    case "cd":

      if(!arg) return;

      if(arg === ".."){
        if(currentPath.length > 2)
          currentPath.pop();
        return;
      }

      if(getDir()[arg]){
        currentPath.push(arg);
      } else {
        print("directory not found");
      }
      break;

    case "clear":
      output.innerHTML = "";
      break;

    default:
      print("command not found");
  }
}
