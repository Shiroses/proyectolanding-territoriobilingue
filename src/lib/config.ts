/**
 * Configuración editable del sitio.
 * Cambia aquí los enlaces y datos sin tocar los componentes.
 */

/**
 * Enlace del formulario oficial de inscripción (botón "Consultar información de inscripción").
 *
 * Mientras esté vacío (""), el botón se muestra deshabilitado y la página informa que la
 * convocatoria está pendiente de publicación. Cuando el cliente entregue la URL oficial,
 * pégala aquí (https://...) y el botón abrirá el formulario en una pestaña nueva.
 * La URL está pendiente y no debe inventarse.
 */
export const FORM_URL: string = "";

/**
 * URL pública del sitio (se usa para metadatos).
 * TODO: cambiar cuando la página se publique en un dominio real.
 */
export const SITE_URL = "http://localhost:3000";

export const SITE = {
  nombre: "Santander Territorio Bilingüe",
  titulo: "Santander Territorio Bilingüe · Formación gratuita en inglés",
  descripcion:
    "¡Tu próxima gran oportunidad puede hablar inglés! Formación gratuita y virtual en inglés, con acompañamiento académico de la Universidad Santo Tomás, dirigida a personas residentes en Santander y pertenecientes a las poblaciones del FondoPAZ.",
};

/** Entidades de la alianza (pie de página). */
export const CREDITOS = [
  "Gobernación de Santander",
  "Secretaría de Competitividad y Productividad",
  "FondoPAZ",
  "Universidad Santo Tomás, Seccional Bucaramanga",
];
