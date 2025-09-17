// Variables de los elementos DOM principales para su manipulación
const serviciosPagina = document.querySelector(".services-section");
const descripcionServicio = document.querySelectorAll(".servicio-descripcion");
const servicesCards = document.querySelectorAll(".service-card");
const calilbracionSection = document.querySelector(".calibracion-instrumentos");
const titulo = document.querySelector(".banner-content h1");
const subTitulo = document.querySelector(".banner-content p");
const seccionNecesidades = document.querySelector(".metrology-section");
const imagenDocumentos = document.querySelector(
  ".descripcion-documento-imagen"
);
const cotizacionSeccion = document.querySelector(".quote-section");

// Objeto con los datos de cada servicio para actualizar los títulos y subtítulos
const datosServicio = {
  "masa-section": {
    titulo: "Masa M-170",
    subtitulo:
      "Servicio de calibración a instrumentos para pesar, pesas y objetos no normalizados.",
    documentoImagen: "/resources/masa-documento.png",
  },
  "par-torsional-section": {
    titulo: "Par Torsional PT-14",
    subtitulo:
      "Ofrecemos servicios de calibración garantizando la máxima calidad.",
    documentoImagen: "/resources/partorsional-documento.png",
  },
  "presion-section": {
    titulo: "Presión P-117",
    subtitulo:
      "Calibración de instrumentos de presión con cumplimiento normativo. ",
    documentoImagen: "../resources/presion-documento.png",
  },
  "dimensional-section": {
    titulo: "Dimensional D-134",
    subtitulo: "Servicio de calibración en el área de dimensional.",
    documentoImagen: "/resources/dimension-documento.png",
  },
  "analizadores-section": {
    titulo: "Analizadores Específicos AE-37",
    subtitulo: "Servicio de calibración a analizadores específicos.",
    documentoImagen: "/resources/analizadores-documento.png",
  },
  "fuerza-section": {
    titulo: "Fuerza F-63",
    subtitulo: "Servicio de calibración en el área de fuerza.",
    documentoImagen: "/resources/fuerza-documento.png",
  },
  "temperatura-section": {
    titulo: "Temperatura T-137",
    subtitulo:
      "Servicio de calibración en el área de temperatura para mantener procesos bajo control.",
    documentoImagen: "/resources/temperatura-documento.png",
  },
  "humedad-section": {
    titulo: "Humedad H-45",
    subtitulo:
      "Servicio de calibración a higrómetros y sensores de humedad para ambientes controlados.",
    documentoImagen: "/resources/humedad-documento.png",
  },
  "tiempo-frecuencia-section": {
    titulo: "Tiempo y Frecuencia TF-27",
    subtitulo: "Calibración de tacómetros, cronómetros y timers.",
    documentoImagen: "/resources/tiempo-documento.png",
  },
  "electrica-section": {
    titulo: "Eléctrica E-150",
    subtitulo: "Servicio de calibra ción en el área de eléctrica.",
    documentoImagen: "/resources/electrica-documento.png",
  },
  "optica-section": {
    titulo: "Óptica OP-44",
    subtitulo: "Servicio de calibración a filtros en el área de óptica.",
    documentoImagen: "/resources/optica-documento.png",
  },
  "flujo-section": {
    titulo: "Flujo FL-58",
    subtitulo: "Servicio de calibración en el área de Flujo.",
    documentoImagen: "/resources/flujo-documento.png",
  },
  "dureza-section": {
    titulo: "Dureza DZA-34",
    subtitulo: "Servicio de calibración en el área de Dureza",
    documentoImagen: "/resources/dureza-documento.png",
  },
  "metal-mecanica-section": {
    titulo: "Pruebas de ensayo en Metal Mecánica MM-1564-178/22",
    subtitulo:
      "Prueba de ensayo en válvulas de seguridad NOM-093-SCFI-2020 inciso 8.3 y 8.4 Válvulas de relevo de presión",
    documentoImagen: "/resources/metal-mecanica-documento.png",
  },
  "prueba-ensayo-section": {
    titulo: "Pruebas de ensayo en Metal Mecánica MM-1564-178/22",
    subtitulo:
      "NOM-093-SCFI-2020 Inciso 8.3 y 8.4 Válvulas de relevo de presión",
    documentoImagen: "/resources/prueba-ensayo-documento.png",
  },
  "mantenimiento-section": {
    titulo: "Mantenimiento Preventivo y CORRECTIVO",
    subtitulo:
      "Evita paros, reduce costos y mantén tus herramientas en óptimas condiciones.",
  },
};

// Función para mostrar la vista principal de servicios
function mostrarServicios() {
  serviciosPagina.style.display = "block";
  descripcionServicio.forEach((seccion) => {
    seccion.style.display = "none";
  });
  seccionNecesidades.style.display = "block";
  calilbracionSection.style.display = "none";
  cotizacionSeccion.style.display = "block";
  titulo.textContent = "Servicios de Calibración Acreditados";
  subTitulo.textContent =
    "Conoce nuestras soluciones en metrología para la industria.";
}

// Función para mostrar una descripción de servicio específica y ocultar los demás
function mostrarDescripcion(targetId) {
  serviciosPagina.style.display = "none";
  seccionNecesidades.style.display = "none";
  calilbracionSection.style.display = "block";
  cotizacionSeccion.style.display = "none";

  descripcionServicio.forEach((seccion) => {
    seccion.style.display = seccion.id === targetId ? "block" : "none";
  });

  const datos = datosServicio[targetId];
  if (datos) {
    titulo.textContent = datos.titulo;
    subTitulo.textContent = datos.subtitulo;

    // ✅ Selecciona la imagen dentro de la sección activa
    const seccionActiva = document.getElementById(targetId);
    const imagen = seccionActiva.querySelector(".descripcion-documento-imagen");

    if (imagen && datos.documentoImagen) {
      imagen.src = datos.documentoImagen;
    } else if (imagen) {
      imagen.src = ""; // o una imagen por defecto si lo prefieres
    }
  }
}

// Función que maneja el cambio de estado y el historial del navegador
function manejarCambioDeEstado(targetId) {
  history.pushState({ page: targetId }, "", `#${targetId}`);
  mostrarDescripcion(targetId);
}

// Agrega el evento de clic a cada tarjeta de servicio
servicesCards.forEach((card) => {
  card.addEventListener("click", () => {
    const targetId = card.getAttribute("data-target");
    // Llama a la nueva función que maneja el estado
    manejarCambioDeEstado(targetId);
  });
});

// Escucha el evento popstate para la navegación con los botones del navegador
window.onpopstate = (event) => {
  // El event.state contiene los datos de pushState
  if (event.state && event.state.page) {
    mostrarDescripcion(event.state.page);
  } else {
    // Si no hay estado, significa que estamos en la página inicial
    mostrarServicios();
  }
};

// Lógica para manejar el estado inicial de la página (ej. si se carga con una URL específica)
const initialHash = window.location.hash.slice(1);
if (initialHash) {
  mostrarDescripcion(initialHash);
} else {
  // Si no hay hash, muestra la vista principal
  mostrarServicios();
}
