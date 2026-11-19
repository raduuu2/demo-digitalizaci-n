"use strict";

const form = document.querySelector("#formularioContacto");
const message = form.elements.mensaje;
const status = document.querySelector("#estadoFormulario");

// Conservamos la validación nativa y comprobamos también los espacios en blanco.
message.addEventListener("input", () => {
  message.setCustomValidity("");
});

form.addEventListener("input", () => {
  status.textContent = "";
  status.classList.remove("alert", "alert-success", "mt-3");
});

form.addEventListener("submit", (event) => {
  // Los campos con errores nativos no llegan al evento submit.
  event.preventDefault();

  if (!message.value.trim()) {
    message.setCustomValidity("Escribe un mensaje con algún carácter distinto de un espacio.");
    message.reportValidity();
    return;
  }

  form.reset();
  status.classList.add("alert", "alert-success", "mt-3");
  status.textContent = "Envío simulado correctamente. El mensaje no se ha enviado a ningún servidor.";
});

// El formulario solo se puede usar cuando el envío simulado está preparado.
form.querySelector("fieldset").disabled = false;
