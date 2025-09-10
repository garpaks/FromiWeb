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
  {
    texto: '"El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito."',
    autor: '- Albert Schweitzer -',
  },
  {
    texto: '"La única forma de hacer un gran trabajo es amar lo que haces."',
    autor: '- Steve Jobs -',
  },
  {
    texto: '"El liderazgo es la capacidad de transformar la visión en realidad."',
    autor: '- Warren Bennis -',
  },
  {
    texto: '"La innovación es lo que distingue a un líder de los demás."',
    autor: '- Steve Jobs -',
  },
  {
    texto: '"Nuestra mayor debilidad radica en darnos por vencidos. La forma más segura de tener éxito es siempre intentarlo una vez más."',
    autor: '- Thomas A. Edison -',
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

setInterval(cambiarLema, 20000);

cambiarLema();
