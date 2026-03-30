// boton hero
function mostrarMensaje() {
    alert("Gracias por visitar nuestra pagina!");
}

// acordeon
function toggleAcordeon(btn) {
    var contenido = btn.nextElementSibling;
    if (contenido.style.display == "block") {
        contenido.style.display = "none";
    } else {
        contenido.style.display = "block";
    }
}

// formulario contacto
function enviarFormulario(e) {
    e.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre == "" || email == "" || mensaje == "") {
        alert("Por favor completa todos los campos");
        return;
    }

    document.getElementById("respuesta-form").innerText = "Mensaje enviado correctamente. Te contactaremos pronto, " + nombre + "!";

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
}
