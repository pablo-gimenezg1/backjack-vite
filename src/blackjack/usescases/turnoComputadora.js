import {pedirCarta, valorCarta, crearCartaHtml} from "./";



//PASO N7: CREAR EL TURNO DE LA COMPUTADORA
//La computadora tendra dos reglas: 
//1) Tiene que tener 2 puntos igual o superior al jugador.
//2) Si el jugador pierde(se pasa de 21) o se detiene. La computadora empezara a pedir las cartas hasta alcanzar los puntajes del jugador o llegar a 21.
/**           
* @param {Number} puntosminimos puntos minimos que la computadora necesita para ganar. 
* @param {HTMLElement} elemento elemento HTML para mostrar los puntos.
* @param {Array<String>} deck  
*/
export const turnoComputadora = (puntosMinimos, cambioPunajeHTML, divCartasComputadora,  deck=[])=>{

    if(!puntosMinimos) throw new Error("Puntos minimos son necesarios.");
    if(!cambioPunajeHTML) throw new Error("Agumento cambioPuntajeHTML son necesarios.");


    let puntosComputadora = 0;

    do{
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta(carta);
        cambioPunajeHTML.innerText = puntosComputadora;
    
        const imagenCarta = crearCartaHtml(carta);
        divCartasComputadora.append(imagenCarta);

        if(puntosMinimos > 21){
            break;
        }
    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    //PASO N9: CONFIGURACION DEL BOTON "NUEVO JUEGO" Y MENSAJE DE VICTORIA Y PERDIDA.
    //MENSJA DE VICTORIA.
    //setTimeout(): metodo que reibe una funcion "callback" y los milisegundos establecidos para ejecutar el codigo despues de corrido el tiempo. Es un metodo que sirve ejecutar una accion despues de derminado milisegundos.
    setTimeout(()=>{
        //(puntosComputadora === puntosMinimos) ? alert("Nadie gana") : (puntosMinimos > 21) ? alert("La computadora gana") : (puntosComputadora > 21)?alert("Gana el jugador"); 

        if(puntosComputadora === puntosMinimos){
            alert("Nadie gana");
        }else if(puntosMinimos > 21){
            alert("La computadora gana");        
        }else if(puntosComputadora > 21){
            alert("Gana el jugador");
        }else{
            alert("Computadora gana")
        }
    }, 100)
}
