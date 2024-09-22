
/**
 * Etsa funcion me permite tomar una carta
 * @param {Array<String>} deck arreglo de cartas string
 * @returns {String} retorna la carta del deck eliminada 
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck'
    }

    const card = deck.pop();

    return card;
}