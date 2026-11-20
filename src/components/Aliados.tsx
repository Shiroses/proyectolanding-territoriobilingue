import Image from "next/image";
import { Container, Eyebrow } from "./ui";

// Los cuatro logotipos oficiales, con igual espacio y sin alterar sus diseños.
const aliados = [
  { nombre: "Gobernación de Santander", src: "/images/logos/gobernacion-santander.png", width: 700, height: 218 },
  {
    nombre: "Secretaría de Competitividad y Productividad",
    src: "/images/logos/secretaria-competitividad.png",
    width: 600,
    height: 172,
  },
  { nombre: "FondoPAZ", src: "/images/logos/fondopaz.png", width: 300, height: 299 },
  {
    nombre: "Universidad Santo Tomás, Seccional Bucaramanga",
    src: "/images/logos/usta-bucaramanga.png",
    width: 1267,
    height: 281,
  },
];

/** Sección 04 · Aliados: entidades participantes con sus identidades visuales oficiales. */
export default function Aliados() {
  return (
    <section id="aliados" aria-labelledby="aliados-title" className="border-t border-navy/10 bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Una alianza que crea oportunidades</Eyebrow>
          <h2 id="aliados-title" className="font-display text-4xl leading-[1.08] font-bold text-navy sm:text-5xl">
            Cuando unimos esfuerzos, el talento de Santander llega más lejos.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-negro/80">
            Santander Territorio Bilingüe reúne el compromiso institucional con el desarrollo del departamento y la
            formación académica para acercar el inglés a poblaciones beneficiarias del Fondo de Pacificación. Una
            iniciativa que apuesta por el conocimiento, la inclusión y la construcción de paz.
          </p>
        </div>

        <div className="mt-14 rounded-card bg-niebla p-6 sm:p-10">
          <h3 className="font-display text-center text-2xl font-bold text-navy">Instituciones participantes</h3>
          <p className="mx-auto mt-3 max-w-3xl text-center leading-relaxed text-negro/75">
            La Gobernación de Santander, a través de la Secretaría de Competitividad y Productividad, participa junto con
            FondoPAZ y la Universidad Santo Tomás, Seccional Bucaramanga, en una iniciativa para fortalecer las
            capacidades comunicativas en inglés de las poblaciones convocadas.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {aliados.map((a) => (
              <li
                key={a.nombre}
                className="flex h-32 items-center justify-center rounded-card border border-navy/10 bg-white p-4 sm:h-40 sm:p-6"
              >
                <Image
                  src={a.src}
                  alt={a.nombre}
                  width={a.width}
                  height={a.height}
                  sizes="(min-width: 1024px) 240px, 45vw"
                  className="h-auto max-h-20 w-auto max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
