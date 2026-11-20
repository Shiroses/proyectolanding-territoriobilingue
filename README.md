# Santander Territorio Bilingüe · Versión comercial

Landing de **Santander Territorio Bilingüe** (formación *English Horizons*): formación gratuita y virtual en inglés,
con acompañamiento académico de la Universidad Santo Tomás, para personas residentes en Santander y pertenecientes a
las poblaciones del FondoPAZ. Alianza de la Gobernación de Santander, la Secretaría de Competitividad y Productividad,
FondoPAZ y la Universidad Santo Tomás, Seccional Bucaramanga.

Stack: Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript · lucide-react · DM Sans + Manrope.

## Cómo ejecutarla

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # compilación de producción
npm start        # servir la compilación
npm run lint     # revisión de código
```

## Secciones (una sola página)

1. `#programa`: El programa (portada, propuesta de valor y beneficios).
2. `#formacion`: Formación y postulación (English Horizons, ficha, aprendizajes, poblaciones y condiciones).
3. `#participar`: Cómo participar (tres pasos y botón de inscripción).
4. `#aliados`: Aliados (los cuatro logotipos oficiales).
5. `#marco-normativo`: Marco normativo (filas desplegables con enlace a cada documento).

## Enlace del formulario de inscripción

El botón «Consultar información de inscripción» usa `FORM_URL` en `src/lib/config.ts`:

```ts
export const FORM_URL: string = ""; // pendiente: URL oficial del formulario
```

Mientras esté vacío, el botón aparece deshabilitado con el aviso «Convocatoria pendiente de publicación».
Cuando se pegue la URL oficial (`https://...`), el botón la abre en una pestaña nueva.

## Archivos

- `src/components/`: Header, Programa, Formacion, Participar, Aliados, MarcoNormativo, Footer y `ui.tsx`.
- `public/images/fotos/`: imágenes del documento del cliente (WebP optimizado).
- `public/images/logos/`: logos de las cuatro entidades aliadas.
- `public/docs/ordenanza-062-2017.pdf`: Ordenanza 062 de 2017.

## Identidad visual

Paleta de la Universidad Santo Tomás: azul `#1B4A96`, azul profundo `#123165`, naranja `#F68712`, amarillo `#FCCB06`,
rojo `#ED1C2D` y cian `#00ADEF`. Fuentes: DM Sans (texto) y Manrope (titulares).
