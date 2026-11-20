import { ArrowUpRight, Clock } from "lucide-react";
import { FORM_URL } from "@/lib/config";
import { Container, Eyebrow } from "./ui";

const pasos = [
  {
    titulo: "Consulta los requisitos",
    texto:
      "Verifica las poblaciones destinatarias, las condiciones de participación y la información oficial de la convocatoria.",
  },
  {
    titulo: "Realiza tu postulación",
    texto: "Cuando se habilite el formulario, completa tus datos y presenta los documentos solicitados.",
  },
  {
    titulo: "Espera la confirmación",
    texto:
      "Tu solicitud será revisada según los requisitos y los cupos disponibles. La información sobre el resultado se comunicará por los canales oficiales.",
  },
];

/**
 * Botón único de inscripción. Si FORM_URL (src/lib/config.ts) está vacío, se muestra deshabilitado
 * y se informa que la convocatoria está pendiente de publicación.
 */
function BotonInscripcion() {
  const habilitado = /^https?:\/\//.test(FORM_URL);
  const clases =
    "group inline-flex flex-col items-center justify-center rounded-3xl px-9 py-4 sm:rounded-full text-base font-bold sm:flex-row sm:gap-3";

  if (!habilitado) {
    return (
      <div className="flex flex-col items-center gap-4">
        <span
          role="link"
          aria-disabled="true"
          aria-describedby="convocatoria-pendiente"
          className={`${clases} cursor-not-allowed bg-[#c9d3df] text-[#5b6b80]`}
        >
          Consultar información de inscripción
          <span className="text-xs font-semibold tracking-[0.08em] uppercase opacity-80">Enlace oficial</span>
        </span>
        <p
          id="convocatoria-pendiente"
          className="inline-flex items-center gap-2 rounded-full bg-amarillo/25 px-4 py-2 text-sm font-semibold text-navy ring-1 ring-amarillo"
        >
          <Clock aria-hidden="true" className="size-4" />
          Convocatoria pendiente de publicación
        </p>
      </div>
    );
  }

  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${clases} bg-naranja text-white shadow-[0_8px_24px_rgba(246,135,18,0.35)] transition-colors hover:bg-[#ff9a2e]`}
    >
      <span className="inline-flex items-center gap-2">
        Consultar información de inscripción
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
      <span className="text-xs font-semibold tracking-[0.08em] uppercase opacity-85">Enlace oficial</span>
      <span className="sr-only"> (abre en una nueva pestaña)</span>
    </a>
  );
}

/** Sección 03 · Cómo participar: ruta de inscripción en tres pasos y un único llamado a la acción. */
export default function Participar() {
  return (
    <section id="participar" aria-labelledby="participar-title" className="bg-[#f9fafb] py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Da el primer paso</Eyebrow>
          <h2
            id="participar-title"
            className="font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-navy sm:text-5xl"
          >
            Tu oportunidad de aprender inglés empieza aquí.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#566479]">
            Revisa las condiciones del programa y prepárate para postularte. El proceso es sencillo y se realizará a
            través de los canales oficiales de la convocatoria.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-12 md:grid-cols-3 md:gap-[34px]">
          <span
            aria-hidden="true"
            className="absolute top-[29px] right-[14%] left-[14%] hidden h-px bg-[repeating-linear-gradient(to_right,#afc0d2_0_8px,transparent_8px_16px)] md:block"
          />
          {pasos.map(({ titulo, texto }, i) => (
            <li key={titulo} className="relative z-10 text-center">
              <span className="font-display mx-auto mb-5 grid size-[60px] place-items-center rounded-full border-[7px] border-[#f9fafb] bg-navy text-lg font-extrabold text-white shadow-[0_0_0_1px_#dde5ee]">
                <span className="sr-only">Paso </span>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mb-2.5 text-[19px] font-bold text-navy">{titulo}</h3>
              <p className="mx-auto max-w-[320px] text-base leading-relaxed text-[#566479]">{texto}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <BotonInscripcion />
        </div>
      </Container>
    </section>
  );
}
