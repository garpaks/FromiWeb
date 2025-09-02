// Array de los lemas
const lemas = [
  {
    texto:
      '"Pregúntate si lo que estás haciendo hoy te <br> acerca al lugar en el que quieres estar mañana"',
    autor: "- Walt Disney -",
  },
  {
    texto: '"Si todos avanzan juntos, entonces <br> el éxito se cuidará solo"',
    autor: "- Henry Ford -",
  },
];

// Variables para el lema
const lemaTexto = document.querySelector(".lema-container h2");
const lemaAutor = document.querySelector(".lema-container p ");

// Variable llevar el control del indice actual
let indiceActual = 0;

// Funcion para cambiar contenido
function cambiarLema() {
  const citaActual = lemas[indiceActual];

  lemaTexto.innerHTML = citaActual.texto;
  lemaAutor.innerHTML = citaActual.autor;

  indiceActual++;

  if (indiceActual >= lemas.length) {
    indiceActual = 0;
  }
}

setInterval(cambiarLema, 5000);

cambiarLema();
