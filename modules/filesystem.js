
window.fs = {
  home: {}
};

window.currentPath = [];

function getDir(){
  let dir = fs;
  for(let p of currentPath){
    dir = dir[p];
  }
  return dir;
}

function pathString(){
  return "/" + currentPath.join("/");
}
