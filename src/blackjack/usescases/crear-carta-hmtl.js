/**           
* @param {String} carta  
* @returns {HTMLImgaeLement} imagen de retorno
*/
export const crearCartaHtml = (carta)=>{
    if(!carta) throw new Error("La carta es un argumento obligatorio.");

    //PASO N5: CREAR CARTAS EN EL HTML
    //<img class="cartas" src="assets/img/cartas/2C.png" alt="">
    const imagenCarta = document.createElement("img");
    imagenCarta.src = `assets/img/cartas/${carta}.png`; //insertara por cada valor de la carta la imagen
    imagenCarta.classList.add("cartas");

    return imagenCarta;
}