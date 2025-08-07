//variables
let numeroSecreto = 5;
let numeroUsuario;
let cantidadIntentos = 1;
let palabraVeces = 'vez';
while (numeroUsuario != numeroSecreto) {

    numeroUsuario = prompt("me indicas un numero entre 1 y 10 por favor");
    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) { // compara si es igual  numeroUsuario entre numeroSecreto 
        alert(`acertastes, el numero es: ${numeroUsuario}. Lo hicistes en: ${cantidadIntentos} ${palabraVeces}`) //dentro de las {} puedes colocar no solo variales, si no que tambien codigo js
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('el numero es menor');
        } else {
            alert('el numero es mayor');
        }
        cantidadIntentos = cantidadIntentos+1;

        palabraVeces = 'veces';
    }
}
