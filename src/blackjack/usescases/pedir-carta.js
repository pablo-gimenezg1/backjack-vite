//PASO N2: PEDIR CARTA
//esta funcion permite tomar una carta. La carta tomada debe desaparecer del arreglo de cartas.
/**           
* @param {Array<Strig>} deck un arreglo de String.
* @returns {String} retorna la carta del deck.
*/
export const pedirCarta = (deck)=>{
    //Condicion para verificar si hay cartas en la baraja.
    if(!deck|| deck.length === 0){
        throw "No hay carta en el deck";//avisa en popUp de error, todo codigo escrito despeus no puede ejecutarse.
    }
    //removera el ultimo elemento y retorna ese valor eleminado y lo almacenamos en una variable.
    let carta = deck.pop(); 
    return carta;
};
/* for(let i=0; i <= 100; i++){
    pedirCarta();
} */