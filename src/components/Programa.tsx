import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Globe2, HeartHandshake, TrendingUp } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const beneficios = [
  {
    icon: TrendingUp,
    titulo: "Más posibilidades",
    texto: "Una habilidad que puede fortalecer tu proyección personal y profesional.",
    acento: "bg-cian",
  },
  {
    icon: Globe2,
    titulo: "Conexión con el mundo",
    texto: "Acércate a nuevos contenidos, culturas y conversaciones.",
    acento: "bg-amarillo",
  },
  {
    icon: HeartHandshake,
    titulo: "Aprendizaje con propósito",
    texto: "Comunicación, convivencia y construcción de paz desde el territorio.",
    acento: "bg-naranja",
  },
];

/** Sección 01 · El programa: portada, propuesta de valor y motivación para conocer la formación. */
export default function Programa() {
  return (
    <section id="programa" aria-labelledby="programa-title">
      {/* Portada */}
      <div className="relative overflow-hidden bg-navy text-white">
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-2 bg-amarillo" />
        <svg
          viewBox="0 0 200 200"
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-20 w-56 opacity-70"
          fill="none"
        >
          <circle cx="100" cy="100" r="80" stroke="#1B4A96" strokeWidth="22" />
          <path d="M100 20 A80 80 0 0 1 180 100" stroke="#FCCB06" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-24">
          <div>
            <p className="font-display inline-flex items-center gap-2 rounded-full bg-amarillo px-4 py-1.5 text-sm font-bold tracking-[0.06em] text-navy uppercase">
              Santander Territorio Bilingüe
            </p>

            <h1
              id="programa-title"
              className="font-display mt-7 text-[2.4rem] leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-[3.6rem]"
            >
              ¡Tu próxima gran oportunidad puede <span className="text-amarillo">hablar inglés!</span>
            </h1>
            <p className="font-display mt-4 text-xl leading-snug font-bold text-white sm:text-2xl">
              ¡Prepárate para ella y haz que tu perfil destaque!
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Haz que tu talento llegue más lejos. Aprende inglés, fortalece tu perfil profesional y desarrolla una de
              las habilidades más valoradas en el mundo laboral.
            </p>

            <Link
              href="/#formacion"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-naranja px-8 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(246,135,18,0.35)] transition-colors hover:bg-[#ff9a2e]"
            >
              Conoce la formación
              <ArrowDown aria-hidden="true" className="size-5 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute -right-3 -bottom-3 left-3 top-3 rounded-[1.75rem] bg-amarillo" />
            <Image
              src="/images/fotos/estudiantes-english-for-peace.webp"
              alt="Jóvenes conversando en una clase de inglés con un tablero que dice English for Peace"
              width={1400}
              height={933}
              sizes="(min-width: 1024px) 520px, 92vw"
              className="relative h-auto w-full rounded-[1.75rem] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              preload
            />
          </div>
        </Container>
      </div>

      {/* Propuesta de valor */}
      <div className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>El programa</Eyebrow>
              <h2 className="font-display text-4xl leading-[1.08] font-bold text-navy sm:text-5xl">
                Tu territorio es el punto de partida, no el límite.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-negro/80 lg:pt-10">
              <p>
                Con <strong className="text-navy">Santander Territorio Bilingüe</strong>, tienes la oportunidad de
                formarte gratuitamente, ampliar tus horizontes y prepararte para acceder a nuevas oportunidades. Te
                ofrecemos formación gratuita y virtual en inglés, con acompañamiento académico de la Universidad Santo
                Tomás. Una oportunidad dirigida a personas residentes en Santander y pertenecientes a las poblaciones del
                FondoPAZ.
              </p>
              <p>
                Aprender inglés es sumar una herramienta para crecer, compartir ideas y descubrir otras formas de ver el
                mundo. A través de Santander Territorio Bilingüe, podrás fortalecer tus habilidades de comunicación en
                inglés, adquirir conocimientos prácticos para desenvolverte en diferentes situaciones y ampliar tus
                posibilidades de desarrollo personal, educativo y profesional.
              </p>
            </div>
          </div>

          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {beneficios.map(({ icon: Icon, titulo, texto, acento }) => (
              <li key={titulo} className="relative overflow-hidden rounded-card border border-navy/10 bg-niebla p-8">
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${acento}`} />
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-azul text-white">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="font-display mt-6 text-2xl leading-snug font-bold text-navy">{titulo}</h3>
                <p className="mt-2 leading-relaxed text-negro/75">{texto}</p>
              </li>
            ))}
          </ul>

          <p className="font-display mx-auto mt-14 max-w-3xl border-l-4 border-amarillo pl-6 text-2xl leading-snug font-bold text-navy sm:text-[1.75rem]">
            Porque las oportunidades no tienen fronteras cuando tienes las herramientas para alcanzarlas.
          </p>
        </Container>
      </div>
    </section>
  );
}
