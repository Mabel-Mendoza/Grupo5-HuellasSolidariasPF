const isEmpty = /^\s*$/;

document.addEventListener("DOMContentLoaded", () => {
  const fechaInput = document.getElementById("fecha");
  const preguntaInput = document.getElementById("pregunta");
  const form = document.getElementById("formPregunta");

  form.addEventListener("submit", (e) => {
    // Limpia errores anteriores
    limpiarErrores();

    let hasError = false;

    // Validar fecha
    if (isEmpty.test(fechaInput.value)) {
      mostrarError(fechaInput, "La fecha es obligatoria.");
      hasError = true;
    }

    // Validar pregunta
    if (isEmpty.test(preguntaInput.value)) {
      mostrarError(preguntaInput, "Por favor, escribe tu pregunta.");
      hasError = true;
    }

    if (hasError) {
      e.preventDefault(); // Detiene envío
    }
  });

  function mostrarError(elemento, mensaje) {
    elemento.classList.add("error");
    const contenedor = elemento.parentNode;

    const div = document.createElement("div");
    div.classList.add("error-message");
    div.innerText = mensaje;

    contenedor.appendChild(div);
  }

  function limpiarErrores() {
    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    document.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));
  }
});


