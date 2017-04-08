var posicionInicialX = 250;
var posicionInicialY = 250;
var contenedor=document.getElementById("contenedor").value;
var cabezaSerpiente=document.getElementById("cabezaSerpiente");
var avanzarX= 20;
var avanzarY= 20;
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");

console.log(teclas);

function dibujarTeclado(evento)
{
  var x = 10;
  var y = 10;

  var movimiento =40;
  switch(evento.keyCode)
  {
    case teclas.UP:
      //dibujarLinea(x, y, x, y - movimiento);
      y = y - movimiento;
      console.log(y);
    break;
    case teclas.DOWN:
      //dibujarLinea(x, y, x, y + movimiento);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      //dibujarLinea(x, y, x - movimiento, y);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      //dibujarLinea(x, y, x + movimiento, y);
      x = x + movimiento;
    break;
    default:
      console.log("Otra tecla");
    break;
  }
}
