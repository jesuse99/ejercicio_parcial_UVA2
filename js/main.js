const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    if (nombre && nombre.value == "") {
        alert("Ingrese un nombre valido");
        return;
    }

    if (email && email.value == "" || !email.checkValidity()) {
        alert("Ingrese un correo electronico valido");
        return;
    }

    if (asunto && asunto.value == "") {
        alert("Ingrese un asunto valido");
        return;
    }

    if (mensaje && mensaje.value == "") {
        alert("Ingrese un mensaje valido");
        return;
    }

    alert(`Gracias por contactarse! ${nombre.value} en breve le estare respondiendo`);
    formulario.submit();
});

