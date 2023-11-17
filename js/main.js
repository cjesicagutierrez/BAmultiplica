// comentario de linea
/* comentario de bloque */

/*BOTON DE CONTACTO*/

const btnAlert = document.getElementById('btn-alert')
btnAlert.addEventListener('click', () => {
    Swal.fire({
        icon: "success",
        title: "Tu mensaje se envió con exito!",
        showConfirmButton: false,
        timer: 1500
    });
});

/* ADIVINANZA*/

let numero = Math.floor(Math.random() * 100+1);
let intentos = 1;
console.log(numero);

function adivinar(){
    let respuesta = document.getElementById("respuesta").value;
    let resultado = document.getElementById("resultado");

    if (respuesta == numero){
        resultado.textContent = '¡Felicitaciones, adivinaste el número en ${intentos} intentos!';
        resultado.style.color = "green";
    } else if (respuesta > numero){
        resultado.textContent = 'El número es menor, intenta de nuevo.';
        resultado.style.color = "red";
        intentos++;
    } else {
        resultado.textContent = 'El número es mayor, intenta de nuevo.';
        resultado.style.color = "red";
        intentos++;
    }

    document.getElementById("respuesta").value = "";
}

