// Selecciona la sección principal (el contenedor de las tarjetas)
const serviciosPagina = document.querySelector(".services-section");

// Selecciona todas las descripciones de servicio
const descripcionServicio = document.querySelectorAll(".servicio-descripcion");

// Selecciona todas las tarjetas de servicio
const servicesCards = document.querySelectorAll(".service-card");

// Selecciona todos los botones de regreso
const backButtons = document.querySelectorAll(".back-button");

// Selecciona el titulo y subtitulo
const titulo = document.querySelector(".section-title");

// Función para mostrar la página principal de servicios
function mostrarServicios() {
  serviciosPagina.style.display = "block";
  descripcionServicio.forEach((seccion) => {
    seccion.style.display = "none";
  });
}

// Función para mostrar una descripción de servicio específica y ocultar servicios
function mostrarDescripcion(targetId) {
  serviciosPagina.style.display = "none";
  descripcionServicio.forEach((seccion) => {
    seccion.style.display = "none";
  });

  // Encuentra la sección de descripción que corresponde al servicio
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.style.display = "block";
  }
}

// Hace que tenga un evento cada tarjeta en este caso hacer el "click"
servicesCards.forEach((card) => {
  card.addEventListener("click", () => {
    const targetId = card.getAttribute("data-target");
    mostrarDescripcion(targetId);
  });
});
// Hace que tenga un evento cada boton de regreso en este caso hacer el "click"
backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mostrarServicios();
  });
});

mostrarServicios();
