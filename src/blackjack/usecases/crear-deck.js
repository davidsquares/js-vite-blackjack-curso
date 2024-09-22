import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposCarta  ejemplo ['D','H','C','S'];
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if(!tiposCarta) throw new Error('Tipos de carta es obligatorio');
    if(tiposCarta.length === 0) throw new Error('Tipos de carta es obligatorio');

    let deck = [];

    for(let i = 2; i <= 10; i++) {
        // deck.push( i + 'C');

        for (const tipo of tiposCarta) {
            deck.push( i + tipo)
        }
    }

    for( let tipo of tiposCarta){
        for (const especial of tiposEspeciales) {
            deck.push( especial + tipo)
        }
    }

    return _.shuffle( deck );
}

export const nombre = 'Hola me llamo David';

// export default crearDeck; 