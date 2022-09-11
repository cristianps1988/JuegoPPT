function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);    
}

function eleccion(elegiste){
    var resultado = "";
    if(elegiste == 1){
        resultado = "Elegio Piedra";
    } else if(elegiste == 2){
        resultado = "Elegio Papel";
    } else if(elegiste == 3){
        resultado = "Elegio Tijera";
    } else{
        resultado = "Mala eleccion";
    }
    return resultado;
}

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
