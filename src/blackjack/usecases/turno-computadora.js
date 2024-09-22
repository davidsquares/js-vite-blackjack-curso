import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck baraja en el estado actual
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {

    let puntosComputadora = 0;

    do {
        
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);

        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta )
        divCartasComputadora.append (imgCarta);

        if(puntosMinimos > 21) {
            break;
        }

    } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    // Tenemos esta funcion ya que como jscript no es multihilo muestra el mensaje antes de que se muestren las cartas de la computadora.
    // por lo que con esta funcion podemos hacer que tarde un tiempo en aparecer el mensaje despues de presionar detener juego

    setTimeout(() => {
        if( puntosComputadora == puntosMinimos) {
            alert('Nadie gana esta partida. ')
        } else if ( puntosMinimos > 21 ){
            alert('computadora gano la partida')
        } else if (puntosComputadora > 21){
            alert('Jugador gano la partida')
        } else {
            alert('Computadora gana')
        }
    }, 120 ); // el numero son los milisegundos
}