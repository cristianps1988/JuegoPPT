function eleccionJugador(){
    let inputPiedra = document.getElementById('piedra')
    let inputPapel = document.getElementById('papel')
    let inputTijera = document.getElementById('tijera')
    let spanEleccionJugador = document.getElementById('resultadoEleccion')
    
    if(inputPiedra.checked){
       spanEleccionJugador.innerHTML = 'Piedra'
    } else if(inputPapel.checked){
        spanEleccionJugador.innerHTML = 'Papel'
    } else if(inputTijera.checked){
        spanEleccionJugador.innerHTML = 'Tijera'
    } else{
        alert("Error, no escogiste nada")
        spanEleccionJugador.innerHTML = 'Nada'
    }
    eleccionPC()
}

function eleccionPC(){
    let numAleatorio = aleatorio(1,3)
    let spanEleccionPC = document.getElementById('resultadoEleccionPC')

    if(numAleatorio == 1){
        spanEleccionPC.innerHTML = 'Piedra'
    } else if(numAleatorio == 2){
        spanEleccionPC.innerHTML = 'Papel'
    } else if(numAleatorio == 3){
        spanEleccionPC.innerHTML = 'Tijera'
    } 
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

let eleccionJugador1 = document.getElementById('eleccionjugador')
eleccionJugador1.addEventListener('click', eleccionJugador)


/*

var jugador1 = 0;
var jugador2 = 0;
var victorias = 0;
var derrotas = 0;
var empates = 0;

while(victorias < 3 && derrotas < 3){
    jugador1 = prompt("Jugador 1, elige: 1 = Piedra, 2 = Papel, 3 = Tijera");
    jugador2 = aleatorio(1,3);
    alert("El jugador 1 " + eleccion(jugador1));
    alert("El jugador 2 " + eleccion(jugador2));
    //Combate
    if(jugador1 == jugador2){
        alert("Empate");
        empates++
    } else if(jugador1 == 1 && jugador2 == 3){
        alert("Ganaste");
        victorias++
    } else if(jugador1 == 2 && jugador2 == 1){
        alert("Ganaste");
        victorias++
    } else if(jugador1 == 3 && jugador2 == 2){
        alert("Ganaste");
        victorias++
    } else{
        alert("Perdiste");
        derrotas++
    }
}
alert("Tuviste " + victorias + " victorias y " + derrotas + " derrotas.");
*/