import _ from 'underscore'; //Las "{}" para traer una funcion en especifica. "_": para traer todas las funciones y renombrarlo.
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHtml} from './usescases/index'; //no es necesario especificar index, ya que js lo busca por default.


/* 
2C = two of Clubs (Treboles)
2D = two of Diamos (Diamantes)
2H = two of Hearts (Corasonez)
2S = two of Spades (Spadas)
*/
//CREACION DE VARIABLES
let deck = [];
const tiposCartas = ["C", "D", "H", "S"]; //array que indica que tipo de cartas sera cada una
const cartasEspeciales = ["A", "J", "Q", "K"]; //arttay que indica los tipos de cartas especiales
let puntosJugador = 0, puntosComputadora = 0;
//REFERENCIAS DEL HTML
const btnPedirCarta = document.querySelector("#btn-pedir-carta");
const btnDetenerTurno = document.querySelector("#btn-detener");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");
const cambioPunajeHTML = document.querySelectorAll("small");
const btnNuevoJuego = document.querySelector("#btn-nuevo-juego");

//PASO N1: CREAR BARAJA DE CARTAS.
//LLamar a la funcion importada, debe ser alojada dentro de un array vacio.
deck = crearDeck(tiposCartas, cartasEspeciales);

//PASO N4: EVENTO CLICK - PEDIR CARTA
//Debemos escuchar el evento click en el boton de pedir carta. Debemos hacer una refrencia para esto, le pondremo un ID "btn-pedir-carta"
//.addEventListener(evento, function callback); motodo que nos permite escuchar los eventos que realiza el usuario a un elemento HTML.
//recibe dos argumentos: el evento a escuchar, debe ir entre comillas, y una funcion (basica o aninima) llamda "callback"
//lo que hace este metodo es que cuando se realice la esscuha de dicho evento, se dispara la accion que se realiza dentro de la funcion.
//Recordemos que debemos hacer referecia al elemento html y almacenarlo en una variable.
btnPedirCarta.addEventListener("click", function(){
    const carta = pedirCarta(deck);
    puntosJugador = puntosJugador + valorCarta(carta);
    cambioPunajeHTML[0].innerText = puntosJugador;

    const imagenCarta = crearCartaHtml(carta);
    divCartasJugador.append(imagenCarta);

    //PASO N6: CREAR CONDICION PARA SABER SI EL USUARIO LLEGO A LOS 21 PUNTOS
    if(puntosJugador > 21){
        console.warn("Los siento mucho, perdiste");
        btnDetenerTurno.disabled = true;
        btnPedirCarta.disabled = true; //.desable: propiedad booleana que nos permite bloquear una accion.
        turnoComputadora(puntosJugador, cambioPunajeHTML[1], divCartasComputadora, deck);
    }else if(puntosJugador === 21){
        console.warn("21, genial");
        btnPedirCarta.disabled = true;
        btnDetenerTurno.disabled = true;
        turnoComputadora(puntosJugador, cambioPunajeHTML[1], divCartasComputadora, deck);
    }
});



//PASO N8: AGREGAR BOTON PARA DETENER "PEDIR CARTA" DEL JUGADOR
btnDetenerTurno.addEventListener("click", ()=>{
    btnPedirCarta.disabled = true;
    btnDetenerTurno.disabled = true;
    turnoComputadora(puntosJugador, cambioPunajeHTML[1], divCartasComputadora, deck);
})


btnNuevoJuego.addEventListener("click", ()=>{
    console.clear();
    deck = [];
    deck = crearDeck(tiposCartas, cartasEspeciales);
    puntosJugador = 0;
    puntosComputadora = 0;
    cambioPunajeHTML[0].innerText = 0;
    cambioPunajeHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    
    btnPedirCarta.disabled = false;
    btnDetenerTurno.disabled = false;
})

