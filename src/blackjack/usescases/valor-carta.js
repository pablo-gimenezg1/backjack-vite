//PASO N3: VALOR DE CADA CARTA
//Funcion para saber el valor de la carta tomada
/*todos los string pueden ser tratadis como arrays.*/
/**           
* @param {String} carta
* @returns {Number} el valor de la carta.
*/
export const valorCarta = (carta)=>{
    //variable.substring(): metodo de string que estrae un nuevo string de que posicion iciar hasta que otra donde terminar.
    const valor = carta.substring(0, carta.length-1);//se obvia la ultima posicion de cada string 
    //condicion para saber si el valor de la carta es un numero. 
    return (isNaN(valor)) ? //isNaN(variable): expresion que nos permite sabes si un valor es un numero. Devuelve un valor booleano
        ((valor === "A") ? 11 : 10) //si el valor es string y es igual a A este valdra 11, caso contrario valdra 10.
        : valor * 1; //una manera de convertir un string en number
};