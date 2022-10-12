let tablero = [];
let jugadorActivo = "X";
let gameActive = true;
const celdas = document.querySelectorAll(".celda");
const boardDisplay = document.querySelector(".game--status");
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function gestionClick(event){
    const celdaActiva = event.target;
    const celdaNumero = parseInt(celdaActiva.getAttribute('data-celda')); 

    // REVISAR SI LA CELDA ESTÁ VACÍA
    // SI ESTÁ VACÍA, CONTINUAR MARCANDO LA POSICIÓN
    // EN EL ARRAY Y EN EL TABLERO VISIBLE

    if (celdaActiva.innerHTML !== "") {
        console.log('celda ya está ocupada');
        return;
    }

    // MARCAR CELDA CON SÍMBOLO DEL JUGADOR EN EL ARRAY
    tablero[celdaNumero] = jugadorActivo;

    // MARCAR CELDA CON SÍMBOLO DEL JUGADOR ACTIVO
    celdaActiva.innerHTML = jugadorActivo;

    // CAMBIAR JUGADOR EN TURNO
    if(jugadorActivo === "X"){
        jugadorActivo = "O";
    } else {
        jugadorActivo = "X";
    }


    console.log(tablero);
}


celdas.forEach(celda => celda.addEventListener("click", gestionClick));


function ResultValidation(){
    let roundWon = false;
    for (let i = 0; i <= 7; i++){
        const winningConditions = winningConditions[i];
        let a = celdas[winCondition[0]];
        let b = celdas[winCondition[1]];
        let c = celdas[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c){
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        boardDisplay.innerHTML = victoryMessage();
        gameActive = false;
        return;
    }
}