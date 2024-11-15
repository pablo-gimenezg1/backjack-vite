import _ from "underscore";



//Funcion creara un listado de barajas
//Sintaxis de JSDOC COMMETS para mejorar que tipo de parametro recibe una funcion
/**
 * @param {Array<String>} tiposCartas 
 * @param {Array<String>} cartasEspeciales 
 * @returns {array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck =(tiposCartas, cartasEspeciales)=>{
    if(!tiposCartas || tiposCartas == 0)throw new Error("tiposCartas es obligatorio como un arreglo de string.");
    if(!cartasEspeciales || cartasEspeciales == 0)throw new Error("cartasEspeciales es obligatorio como un arreglo de string.");


    let deck = []; //array donde se almacenara cada imagen de las barajas
    //recorrido de 2 hasta 10, por que es el numero de cartas disponible por cada tipo.
    for(let i=2; i<=10; i++){
        //por cada posicion del array principal, este for recorrera todo el array del tipos de carta e insertara el valor los valores de este al indice recorrido del array principal.
        for(let tipo of tiposCartas){
            deck.push(i+tipo); 
        }
    }
    //se recorrera el array de tiposCarta.
    for(let tipo of tiposCartas){
        //por cada tipo de carta se insertara, en el array DECK, cartas especiales (AC, AD, AH, AS, JC....)
        for(let especial of cartasEspeciales){
            deck.push(especial+tipo);
        }
    }
    //Deshorderar el array por medio de un metodo de una libreria(undercore.js version:UDM) esta es un CDN.
    //_.shuffle(array): metodo que recibe un array y lo ordena da manera aleatoria devolviendo otro array con el orden aleatorio. POr cada refresh se generara un nuevo orden de tarjeta.
    deck = _.shuffle(deck);
    return deck;
}

//export default crearDeck;