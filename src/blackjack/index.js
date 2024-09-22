import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML} from './usecases/index'
/**
 * 2C - two clubs
 * 2H - two hearts
 * 2D - two diamonds
 * 2C -two spades
 */

let deck       = [];
const types    = ['D','H','C','S'];
const specials = ['A','J','Q','K'];

let puntosJugador     = 0,
    puntosComputadora = 0;

// Referencias HTML
const   btnPedir      = document.querySelector('#btnPedir'),
        btnDetener    = document.querySelector('#btnDetener'),
        btnNuevoJuego = document.querySelector('#btnNuevo');

// console.log( btnPedir );
const   divCartasJugador = document.querySelector('#jugador-cartas'),
        puntosHTML       = document.querySelectorAll('small');

const divCartasComputadora = document.querySelector('#computadora-cartas');

deck = crearDeck(types, specials);


// EVENTOS 

// poner una funcion como argumento, se llama Callback
// cuando se hace click en el boton se dispara la aciion dentro de la funcion
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = crearCartaHTML(carta);

    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21 ) {
        console.warn('Lo siento pero has perdido');
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    } else if ( puntosJugador === 21){
        console.warn('21, genial')
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
})


btnNuevoJuego.addEventListener('click', () => {
    btnDetener.disabled = false
    btnPedir.disabled = false
    deck = [];
    deck = crearDeck(types, specials);

    puntosJugador     = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = puntosJugador;
    puntosHTML[1].innerText = puntosComputadora;

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
})