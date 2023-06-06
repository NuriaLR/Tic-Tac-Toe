
let turno = true;
let tablero = document.getElementsByClassName("casilla");

for (let i = 0; i < tablero.length; i++) {
  tablero[i].setAttribute('onclick', `pintaCasilla(${i})`);
}

let posicionesX = [];
let posicionesO = [];

/* Función para establecer el turno de cada jugador y que aparezca en el tablero al pulsar. 
Se establece el ganador */

function pintaCasilla(i) {

  if (turno) {
    tablero[i].textContent = 'X';
    posicionesX.push(i);
    posicionesX.sort();
    if (posicionesX.length >= 3) {
      hayGanador(posicionesX);
    }

  } else {
    tablero[i].textContent = 'O';
    posicionesO.push(i);
    posicionesO.sort();
    if (posicionesO.length >= 3) {
      hayGanador(posicionesO);
    }
  }
  tablero[i].removeAttribute('onclick');
  turno = !turno;

}

let combinacionGanadora = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// Función para que cuando ya hay ganador aparezca.

function hayGanador(posiciones) {

  for (let i = 0; i < combinacionGanadora.length; i++) {
    let contador = 0;
    for (let j = 0; j < posiciones.length; j++) {
      if (combinacionGanadora[i].includes(posiciones[j])) {
        contador++;
      }
    }
    if (contador == 3) {

      if (turno) {
        document.getElementById("ganador").textContent = "¡¡Ha ganado X!!";

      } else {
        document.getElementById("ganador").textContent = "¡¡Ha ganado O!!";
      }
      for (let k = 0; k < combinacionGanadora[i].length; k++) {

        tablero[combinacionGanadora[i][k]].style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      }

    }
  }
}





