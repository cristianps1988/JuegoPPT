window.addEventListener("load", iniciarJuego)

var jugador1
var jugador2 
var victorias = 0
var derrotas = 0
var empates = 0

function iniciarJuego(){
    let eleccionJugador1 = document.getElementById("boton-eleccion-jugador")
    eleccionJugador1.addEventListener('click', eleccionJugador)
    
    let botonIniciarCombate = document.getElementById("jugar")
    botonIniciarCombate.addEventListener("click", combate)
    
    let botonReiniciar = document.getElementById("reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

    let botonJugarOtra = document.getElementById("volverajugar")
    botonJugarOtra.addEventListener("click", JugarOtraVez)

    let prueba = document.getElementById("resultadoEleccionJugador")
    prueba.style.display = "none"

    let prueba2 = document.getElementById("eleccionpc")
    prueba2.style.display = "none"

    let prueba3 = document.getElementById("mensaje-resultado")
    prueba3.style.display = "none"

    let prueba5 = document.getElementById("eleccion1")
    prueba5.style.display = "block"

    let prueba6 = document.getElementById("volverajugar")
    prueba6.style.display = "none"

    let prueba7 = document.getElementById("reiniciar")
    prueba7.style.display = "none"

}

function eleccionJugador(){
    let inputPiedra = document.getElementById('piedra')
    let inputPapel = document.getElementById('papel')
    let inputTijera = document.getElementById('tijera')
    let spanEleccionJugador = document.getElementById('resultado-eleccion')

    let prueba = document.getElementById("resultadoEleccionJugador")
    prueba.style.display = "block"

    let prueba2 = document.getElementById("eleccionpc")
    prueba2.style.display = "block"

    let prueba5 = document.getElementById("eleccion1")
    prueba5.style.display = "none"

       
    if(inputPiedra.checked){
       spanEleccionJugador.innerHTML = 'Piedra'
       jugador1 = "Piedra"
       //inputPiedra.disabled = true
       //inputPapel.disabled = true
       //inputTijera.disabled = true
    } else if(inputPapel.checked){
        spanEleccionJugador.innerHTML = 'Papel'
        jugador1 = "Papel"
        //inputPiedra.disabled = true
        //inputPapel.disabled = true
        //inputTijera.disabled = true
    } else if(inputTijera.checked){
        spanEleccionJugador.innerHTML = 'Tijera'
        jugador1 = "Tijera"
        //inputPiedra.disabled = true
        //inputPapel.disabled = true
        //inputTijera.disabled = true
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
        jugador2 = "Piedra"
    } else if(numAleatorio == 2){
        spanEleccionPC.innerHTML = 'Papel'
        jugador2 = "Papel"
    } else if(numAleatorio == 3){
        spanEleccionPC.innerHTML = 'Tijera'
        jugador2 = "Tijera"
    }    
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

function combate(){
    let prueba = document.getElementById("resultadoEleccionJugador")
    prueba.style.display = "none"

    let prueba2 = document.getElementById("eleccionpc")
    prueba2.style.display = "none"

    let prueba3 = document.getElementById("mensaje-resultado")
    prueba3.style.display = "block"

    let prueba6 = document.getElementById("volverajugar")
    prueba6.style.display = "inline"

    let prueba7 = document.getElementById("reiniciar")
    prueba7.style.display = "inline"
    
    let spanVictorias = document.getElementById("victorias")
    let spanDerrotas = document.getElementById("derrotas")
    let spanEmpates = document.getElementById("empates")

    if(jugador1 == jugador2){
        mensajeResultado("Empate")
        empates++
        spanEmpates.innerHTML = empates
    } else if(jugador1 == "Piedra" && jugador2 == "Tijera"){
        mensajeResultado("Ganaste")
        victorias++
        spanVictorias.innerHTML = victorias
    } else if(jugador1 == "Papel" && jugador2 == "Piedra"){
        mensajeResultado("Ganaste")
        victorias++
        spanVictorias.innerHTML = victorias
    } else if(jugador1 == "Tijera" && jugador2 == "Papel"){
        mensajeResultado("Ganaste")
        victorias++
        spanVictorias.innerHTML = victorias
    } else{
        mensajeResultado("Perdiste")
        derrotas++
        spanDerrotas.innerHTML = derrotas

    }
    revisar()
}

function mensajeResultado(resultado){
    let sectionMensajeResultado = document.getElementById("mensaje-resultado")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultado

    sectionMensajeResultado.appendChild(parrafo)
}

function revisar(){

    let prueba6 = document.getElementById("volverajugar")

    if(victorias == 5){
        alert("Felicitaciones, ganaste :)")
        //eleccionJugador1.disabled = true
        //botonIniciarCombate.disabled = true
        prueba6.disabled = true
    } else if(derrotas == 5){
        alert("Game over :(")
        //eleccionJugador1.disabled = true
        //botonIniciarCombate.disabled = true
        prueba6.disabled = true

    }
    
}

function reiniciarJuego(){
    location.reload()
}

function JugarOtraVez(){
    iniciarJuego()
}