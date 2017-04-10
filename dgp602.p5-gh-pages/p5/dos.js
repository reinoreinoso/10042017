var winners = [
  "BeBe Zahara Benet",
  "Tyra Sanchez",
  "Raja",
  "Sharon Needles",
  "Chad Michaels",
  "Jinkx Monsoon",
  "Bianca Del Rio",
  "Violet Chachki",
  "Bob the Drag Queen",
]

var win = [2,3,3,4,3,2,3,3,3]

//movies.push("Matrix");
//oscars.push(4);

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('here');
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(25);
  for(var x = 0; x <= winners.length; x++){
    //defino el blanco con 100/255 de transparencia
    fill(255,100);
    // el tamaño del texto es igual a la cantidad de oscars ganados * 3
    textSize((win[x]*16));
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    text(win[x], ((width/(winners.length+1))*(x+1)), (height/2));
    //re-defino el blanco
    fill(255);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(12);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(winners[x], ((width/(winners.length+1))*(x+1)), ((height/2)+12),((windowWidth/(winners.length+1))-50),100);
  }
}
