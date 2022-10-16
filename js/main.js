//VARIABLES
let oContador = 0;
let xContador = 0;
let tablero = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];
let jugadorActivo = "X";
let gameActive = true;
let playerOneName = localStorage.getItem("firstPlayer");
let playerSecondName = localStorage.getItem("secondPlayer");

const celdas = document.querySelectorAll(".celda");
const boardDisplay = document.querySelector(".game--status");

///CPU
function computerMove() {
    let emptyCellsIndex = [];
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i] === "") {
            emptyCellsIndex.push(i);
    
        }

    const random = Math.ceil(Math.random() * tablero.length) - 1;
    emptyCellsIndex[random].oContainer = jugadorActivo;
    resultValidation();
    jugadorActivo();
  }
    }
    console.log(computerMove);

    


function gestionClick(event) {
    const celdaActiva = event.target;
    const celdaNumero = parseInt(celdaActiva.getAttribute('data-celda'));
    const xContainer = document.querySelector('#xContainer');
    const oContainer = document.querySelector('#oContainer');

    // REVISAR SI LA CELDA ESTÁ VACÍA SI ESTÁ VACÍA, CONTINUAR MARCANDO LA POSICIÓN
    // EN EL ARRAY Y EN EL TABLERO VISIBLE
    if (celdaActiva.innerHTML !== "") {

        return;
    }

    // MARCAR CELDA CON SÍMBOLO DEL JUGADOR EN EL ARRAY
    tablero[celdaNumero] = jugadorActivo;

    resultValidation();

    // MARCAR CELDA CON SÍMBOLO DEL JUGADOR ACTIVO
    celdaActiva.innerHTML = jugadorActivo;

    // CAMBIAR JUGADOR EN TURNO
    if (jugadorActivo === "X") {
        jugadorActivo = "O";
    } else {
        jugadorActivo = "X";
    }

    // OCULTAR SÍMBOLO DEL JUGADOR ACTIVO AL CAMBIAR DE TURNO SI LA VARIABLE
    // jugadorActivo ES IGUAL A "X", ENTONCES OCULTAR EL CONTENEDOR DEL SÍMBOLO "O"
    // Y VICEVERSA USAR classList POR EJEMPLO:
    xContainer
        .classList
        .toggle('visually-hidden');
    oContainer
        .classList
        .toggle('visually-hidden');

    computerMove();

}

//WINNING CONDITIONS

celdas.forEach(celda => celda.addEventListener("click", gestionClick));

const winningConditions = [
    [
        0, 1, 2
    ],
    [
        3, 4, 5
    ],
    [
        6, 7, 8
    ],
    [
        0, 3, 6
    ],
    [
        1, 4, 7
    ],
    [
        2, 5, 8
    ],
    [
        0, 4, 8
    ],
    [
        2, 4, 6
    ]
];

function resultValidation() {

    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];

        let a = tablero[winCondition[0]];
        let b = tablero[winCondition[1]];
        let c = tablero[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        let winnerName;

        if (jugadorActivo === 'X') {
            winnerName = playerOneName;
        } else {
            winnerName = playerSecondName;
        }

        boardDisplay.innerHTML = "Winner " + winnerName; // Quien gano?
        gameActive = false;
        return;
    }
}

//Nombre de los jugadores
function pageLoad() {
    let playerOneContainer = document.querySelector("#playerOneName");
    let playerSecondContainer = document.querySelector("#playerSecondName");

    playerOneContainer.innerHTML = playerOneName;
    playerSecondContainer.innerHTML = playerSecondName;
}







/////RESET BUTTON/////
window.onload = pageLoad();
function refreshPage() {
    window
        .location
        .reload();
}