let tablero = ["","","","","","","","",""];
let jugadorActivo = "X";
let gameActive = true;

const celdas = document.querySelectorAll(".celda");
const boardDisplay = document.querySelector(".game--status");


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

    console.log(jugadorActivo);  

    // MARCAR CELDA CON SÍMBOLO DEL JUGADOR EN EL ARRAY
    tablero[celdaNumero] = jugadorActivo;

    
    resultValidation();

    
    console.log(tablero);

    // MARCAR CELDA CON SÍMBOLO DEL JUGADOR ACTIVO
    celdaActiva.innerHTML = jugadorActivo;

    // CAMBIAR JUGADOR EN TURNO
    if(jugadorActivo === "X"){
        jugadorActivo = "O";
    } else {
        jugadorActivo = "X";
    }

}


celdas.forEach(celda => celda.addEventListener("click", gestionClick));


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

function resultValidation(){

    let roundWon = false;
    for (let i = 0; i <= 7; i++){
        const winCondition = winningConditions[i];

        console.log(winningConditions[i]);

        let a = tablero[winCondition[0]];
        let b = tablero[winCondition[1]];
        let c = tablero[winCondition[2]];

      

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c){
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        boardDisplay.innerHTML = "Ganó";
        gameActive = false;
        return;
    }
}