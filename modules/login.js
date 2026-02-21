
window.user = null;
let waitingPassword = false;

function handleLogin(cmd){

  if(window.user === null){

    if(cmd === "root"){
      waitingPassword = true;
      prompt.textContent = "password:";
      return true;
    }

    window.user = cmd || "guest";

    if(!fs.home[window.user])
      fs.home[window.user] = {};

    currentPath.length = 0;
    currentPath.push("home", window.user);

    prompt.textContent = window.user + "@linux:$";
    print("Welcome " + window.user);
    return true;
  }

  if(waitingPassword){

    if(cmd === "root123"){
      window.user = "root";

      if(!fs.home.root)
        fs.home.root = {};

      currentPath.length = 0;
      currentPath.push("home","root");

      prompt.textContent = "root@linux:#";
      print("Root access granted");
    } else {
      print("Wrong password");
      prompt.textContent = "login:";
      window.user = null;
    }

    waitingPassword = false;
    return true;
  }

  return false;
}
