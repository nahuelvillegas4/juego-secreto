let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //selecciona el elemento HTML a partir del tipo pasado
    elementoHTML.innerHTML = texto; //ingresa este texto dentro del elemento que seleccionamos antes
    return;
}

function verificarIntento() {
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste al numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled') //esto permite remover el artibuto disabled, permitiendo que el boton reiniciar se active
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++
        limpiarCaja()
    }

    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario'); //en este caso el # permite buscar por el id del elemento
    valorCaja.value = ''
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    //si ya salieron todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya salieron todos los numeros posibles')
    } else { //caso contrario
        if (listaNumerosSorteados.includes(numeroGenerado)) { //el includes verifica si el numero ya existe en la lista
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
} 

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // intentos a 1 
    // nuevo numero secreto 
    // deshabilitar nuevamente el boton
    // reestablecer el mensaje de indicar numero
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true') //en este caso setea un nuevo atributo en el boton reiniciar
}

condicionesIniciales();