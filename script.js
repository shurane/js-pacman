var pacman = document.getElementById("pacman"),
  pacmanGfx = pacman.children[0];
var position = {x: 0, y: 0};

window.addEventListener("keydown", function (event) {
  if (event.which === 39){
    event.preventDefault();
    pacmanGfx.className = "right";
    position.x += 100;
  }
  else if (event.which === 37){
    event.preventDefault();
    pacmanGfx.className = "left";
    position.x -= 100;
  }
  else if (event.which === 38){
    event.preventDefault();
    pacmanGfx.className = "up";
    position.y -= 100;
  }
  else if (event.which === 40){
    event.preventDefault();
    pacmanGfx.className = "down";
    position.y += 100;
  }
  
  pacman.style.left = position.x + "px";
  pacman.style.top = position.y + "px";
})
