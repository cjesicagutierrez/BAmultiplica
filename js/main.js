// comentario de linea
/* comentario de bloque */

/*BOTON DE CONTACTO*/

const btnAlert = document.getElementById('btn-alert')
btnAlert.addEventListener('click', function () {
    Swal.fire({
        icon: "success",
        title: "Tu mensaje se envió con exito!",
        showConfirmButton: false,
        timer: 1500
    });
});