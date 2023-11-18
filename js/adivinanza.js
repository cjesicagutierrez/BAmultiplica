/* ADIVINANZA en productos*/

let numero = Math.floor(Math.random() * 10 + 1);
let intentos = 1;
console.log(numero);

function adivinar() {
    let respuesta = document.getElementById("respuesta").value;
    let resultado = document.getElementById("resultado");

    if (respuesta == numero) {

        resultado.textContent; alert('¡Felicitaciones, adivinaste el número!');

    } else {
        resultado.textContent; alert("Perdiste, gracias por participar!")
    };
}