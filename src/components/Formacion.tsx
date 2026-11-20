import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  CalendarClock,
  Check,
  CheckCircle2,
  Lightbulb,
  MapPinned,
  MessageCircle,
} from "lucide-react";
import { Container, Eyebrow } from "./ui";

const datos = ["Un mes de clases.", "100 horas de formación.", "200 participantes", "Sin costo de formación", "Modalidad virtual"];

const detalles = [
  { valor: "80 horas", texto: "Sesiones virtuales con docentes" },
  { valor: "20 horas", texto: "Trabajo autónomo guiado" },
  { valor: "Evaluación", texto: "Inicial y final" },
  { valor: "Certificación", texto: "De asistencia y aprobación" },
];

const aprendizajes = [
  {
    icon: MessageCircle,
    titulo: "Conversa desde el inicio",
    texto: "Saludos, presentaciones personales y preguntas sencillas.",
    acento: "bg-cian",
  },
  {
    icon: MapPinned,
    titulo: "Habla de tu entorno",
    texto: "Rutinas, horarios, lugares de tu comunidad y actividades cotidianas.",
    acento: "bg-amarillo",
  },
  {
    icon: Lightbulb,
    titulo: "Expresa tus ideas",
    texto: "Gustos, habilidades, aspiraciones y un proyecto final.",
    acento: "bg-naranja",
  },
];

const poblaciones = [
  "Víctimas del conflicto armado",
  "Firmantes de paz y personas en reincorporación",
  "Personas reinsertadas, desmovilizadas o en reintegración",
  "Comparecientes ante la JEP, incluida la Fuerza Pública",
  "Personas defensoras de derechos humanos, líderes y lideresas",
];

const requisitos = [
  "Residir en el departamento de Santander.",
  "Acreditar la pertenencia a alguna de las poblaciones beneficiarias, de acuerdo con la convocatoria.",
  "Contar con disponibilidad para participar en sesiones virtuales y realizar las actividades autónomas.",
  "Tener acceso a un dispositivo que permita participar en la formación virtual.",
];

/** Sección 02 · Formación y postulación: English Horizons, aprendizajes, población destinataria y condiciones. */
export default function Formacion() {
  return (
    <section id="formacion" aria-labelledby="formacion-title">
      {/* Características de la formación */}
      <div className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <svg
          viewBox="0 0 400 400"
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[420px] opacity-60"
          fill="none"
        >
          <circle cx="200" cy="200" r="160" stroke="#1B4A96" strokeWidth="40" />
          <path d="M200 40 A160 160 0 0 1 360 200" stroke="#FCCB06" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <div>
              <Eyebrow dark>Características de la formación</Eyebrow>
              <h2 id="formacion-title" className="font-display text-4xl leading-[1.08] font-bold sm:text-5xl">
                Impulsa tus oportunidades con <span className="text-amarillo">English Horizons.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Una ruta intensiva y práctica para dar tus primeros pasos en inglés, fortalecer tu confianza al
                comunicarte y desarrollar una habilidad valiosa para tu futuro. Aprende desde tu territorio, con sesiones
                virtuales en tiempo real y trabajo autónomo guiado.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                El programa contempla recursos académicos y apoyo de conectividad. La certificación se expedirá a quienes
                cumplan los requisitos académicos y de asistencia establecidos.
              </p>
            </div>
            <Image
              src="/images/fotos/formacion-virtual-santander.webp"
              alt="Computador portátil con una clase virtual de inglés y el mapa de Santander conectado con el mundo"
              width={1400}
              height={1050}
              sizes="(min-width: 1024px) 520px, 92vw"
              className="h-auto w-full rounded-[1.75rem] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/15"
            />
          </div>

          {/* Ficha del programa */}
          <div className="mt-14 grid overflow-hidden rounded-card bg-white text-navy shadow-[0_20px_50px_rgba(0,0,0,0.25)] md:grid-cols-[1fr_1.15fr]">
            <div className="bg-amarillo p-8 sm:p-10">
              <p className="font-display text-sm font-extrabold tracking-[0.08em] uppercase">Santander Territorio Bilingüe</p>
              <ul className="mt-5 space-y-2.5">
                {datos.map((d) => (
                  <li key={d} className="font-display flex items-start gap-3 text-xl leading-snug font-bold sm:text-2xl">
                    <Check aria-hidden="true" className="mt-1 size-5 shrink-0" strokeWidth={3} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-2 grid-rows-2 gap-px bg-navy/10">
              {detalles.map(({ valor, texto }) => (
                <div key={valor} className="flex flex-col justify-center bg-white p-5 sm:p-8">
                  <dt className="font-display text-xl font-extrabold text-azul sm:text-2xl">{valor}</dt>
                  <dd className="mt-1 leading-snug text-negro/75">{texto}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ¿Qué empezarás a aprender? */}
          <h3 className="font-display mt-20 text-3xl leading-tight font-bold sm:text-4xl">¿Qué empezarás a aprender?</h3>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {aprendizajes.map(({ icon: Icon, titulo, texto, acento }) => (
              <li key={titulo} className="relative overflow-hidden rounded-card bg-white/[0.07] p-8 ring-1 ring-white/15">
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${acento}`} />
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-amarillo text-navy">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={2} />
                </span>
                <h4 className="font-display mt-6 text-2xl leading-snug font-bold">{titulo}</h4>
                <p className="mt-2 leading-relaxed text-white/80">{texto}</p>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Continuación: población destinataria y condiciones */}
      <div className="bg-niebla py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Formación y postulación</Eyebrow>
            <h3 className="font-display text-4xl leading-[1.08] font-bold text-navy sm:text-5xl">
              ¿Esta oportunidad también puede ser para ti?
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-negro/80">
              Si resides en Santander y haces parte de alguna de las poblaciones beneficiarias del Fondo de Pacificación,
              esta formación puede ser una oportunidad para fortalecer tu perfil y abrirte a nuevas experiencias. La
              convocatoria no establece restricción de edad.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h4 className="font-display text-2xl font-bold text-navy">Poblaciones a las que se dirige</h4>
              <ul className="mt-6 grid gap-3" aria-label="Poblaciones a las que se dirige">
                {poblaciones.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-4 rounded-2xl bg-white p-5 text-lg leading-snug font-medium text-navy ring-1 ring-navy/10"
                  >
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-azul" strokeWidth={2} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-2xl font-bold text-navy">Lo que debes tener presente antes de postularte</h4>
              <ul className="mt-6 space-y-4 rounded-card bg-white p-6 ring-1 ring-navy/10 sm:p-8">
                {requisitos.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-lg leading-relaxed text-negro/80">
                    <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-naranja" />
                    {r}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-card border-l-4 border-naranja bg-white p-6 shadow-[0_4px_20px_rgba(18,49,101,0.06)] sm:p-8">
                <p className="font-display flex items-center gap-2 text-sm font-extrabold tracking-[0.08em] text-naranja uppercase">
                  <CalendarClock aria-hidden="true" className="size-5" />
                  Programación de la convocatoria
                </p>
                <p className="mt-3 leading-relaxed text-negro/80">
                  Las fechas de inicio, los horarios y el periodo de inscripción están pendientes de confirmación. La
                  postulación estará sujeta a la verificación de requisitos y a la disponibilidad de cupos.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#participar"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(18,49,101,0.25)] transition-colors hover:bg-azul"
            >
              Quiero conocer cómo postularme
              <ArrowDown aria-hidden="true" className="size-5 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
