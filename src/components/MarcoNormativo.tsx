import { ChevronDown, ExternalLink, FileText } from "lucide-react";
import { ColorBar, Container, Eyebrow } from "./ui";

const acentos = ["bg-azul", "bg-amarillo", "bg-naranja", "bg-rojo", "bg-cian"];

type Norma = { titulo: string; descripcion: string; href: string; esPdf?: boolean };

// Mismos documentos oficiales que la versión anterior: la ordenanza en PDF y las demás normas en el Gestor Normativo de Función Pública.
const normas: Norma[] = [
  {
    titulo: "Ordenanza 062 de 2017",
    descripcion:
      "Modifica la Ordenanza 007 de 1998, relacionada con el Fondo Especial de Apoyo al Proceso de Pacificación y Reintegración a la Comunidad en el Departamento de Santander.",
    href: "/docs/ordenanza-062-2017.pdf",
    esPdf: true,
  },
  {
    titulo: "Ley 1448 de 2011",
    descripcion: "Establece medidas de atención, asistencia y reparación integral a las víctimas del conflicto armado.",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43043",
  },
  {
    titulo: "Decreto Ley 899 de 2017",
    descripcion:
      "Establece medidas e instrumentos para la reincorporación económica y social de exintegrantes de las FARC-EP.",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=81880",
  },
  {
    titulo: "Decreto 1081 de 2015",
    descripcion:
      "Decreto Único Reglamentario del Sector Presidencia; compila disposiciones relacionadas, entre otras materias, con procesos de reintegración.",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=73593",
  },
  {
    titulo: "Ley 1957 de 2019",
    descripcion: "Ley Estatutaria de la Administración de Justicia en la Jurisdicción Especial para la Paz (JEP).",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=94590",
  },
];

/** Sección 05 · Marco normativo: filas desplegables de ancho completo, sin imágenes. */
export default function MarcoNormativo() {
  return (
    <section id="marco-normativo" aria-labelledby="marco-title" className="bg-[#f9fafb]">
      <div className="relative bg-navy pt-20 pb-24 text-white sm:pt-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow dark>Respaldo institucional</Eyebrow>
            <h2 id="marco-title" className="font-display text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl">
              Un programa que transforma oportunidades con respaldo normativo.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Santander Territorio Bilingüe se desarrolla en el contexto de las disposiciones relacionadas con la
              atención a víctimas del conflicto, la reincorporación, la reintegración y la construcción de paz. Consulta
              las referencias normativas vinculadas a las poblaciones destinatarias del programa.
            </p>
          </div>
        </Container>
        <ColorBar className="absolute bottom-0 left-0" />
      </div>

      <Container className="py-14 sm:py-16">
        <ul className="space-y-4">
          {normas.map(({ titulo, descripcion, href, esPdf }, i) => (
            <li key={titulo}>
              <details
                className="group overflow-hidden rounded-2xl border border-[#dde5ee] bg-white shadow-[0_8px_24px_rgba(21,39,71,0.06)]"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span aria-hidden="true" className={`h-10 w-1.5 shrink-0 rounded-full ${acentos[i % acentos.length]}`} />
                  <span className="font-display flex-1 text-lg leading-snug font-bold text-navy sm:text-xl">{titulo}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className="size-6 shrink-0 text-azul transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="border-t border-[#eef2f6] px-5 pt-4 pb-6 sm:pr-16 sm:pl-[3.25rem]">
                  <p className="text-base leading-relaxed text-[#566479] sm:text-lg">{descripcion}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-azul underline underline-offset-4 hover:text-navy"
                  >
                    Consultar documento
                    {esPdf ? (
                      <FileText aria-hidden="true" className="size-4 shrink-0" />
                    ) : (
                      <ExternalLink aria-hidden="true" className="size-4 shrink-0" />
                    )}
                    <span className="sr-only"> {esPdf ? "(PDF, " : "("}abre en una nueva pestaña)</span>
                  </a>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
