var x =cabezaVibora.x.baseVal.value;
var y = cabezaVibora.y.baseVal.value;
var contenedor=document.getElementById("lugarDibujo");
var cabezaSerpiente=document.getElementById("cabezaVibora");
var avanzar= 50;
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


console.log(x);
console.log(y);
console.log(contenedor);

function viborita(evento){
  switch(evento.keyCode){
    case teclas.UP:
      x = x - avanzar;
      console.log(x);
      if(x < 0){
        finJuego();
      }
      else{
        contenedor.width = x + "px";
      }
    break;
    case teclas.DOWN:
      x = x + avanzar;
      console.log(x);
      if(x > 450){
        finJuego();
      }
      else{
        contenedor.width = x + "px";
      }
    break;
    case teclas.LEFT:
      y = y - avanzar;
      console.log(y);
      if(y < 0){
        finJuego();
      }
      else{
        contenedor.height = y + "px";
      }
    break;
    case teclas.RIGHT:
      y = y + avanzar;
      console.log(y);
      if(y > 450){
        finJuego();
      }
      else{
        contenedor.height = y + "px";
      }
    break;
  }
}

function finJuego(){
  alert("Perdiste!!!");
  window.removeEventListener("keydown", viborita);
}

// function comida(){
// var rectangulo = document.createElement("rect");
// rectangulo.setAttribute("x", 10);
// rectangulo.setAttribute("y", 10);
// rectangulo.setAttribute("width", "50");
// rectangulo.setAttribute("height", "50");
// rectangulo.setAttribute("fill", "yello");
// rectangulo.setAttribute("id", "a");
// console.log(rectangulo);
// }

document.addEventListener("keydown", viborita);
//document.addEventListener("keydown", comida);
