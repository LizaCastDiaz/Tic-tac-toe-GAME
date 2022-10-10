let tablero = [];
let jugadorActivo = "X";
const celdas = document.querySelectorAll(".celda");
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


