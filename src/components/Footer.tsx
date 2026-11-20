import { CREDITOS } from "@/lib/config";
import { ColorBar, Container } from "./ui";

/** Pie de página con las entidades de la alianza. */
export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <ColorBar />
      <Container className="flex flex-col gap-4 py-12 md:flex-row md:items-center md:justify-between">
        <p className="font-display shrink-0 text-2xl leading-tight font-bold whitespace-nowrap">
          Santander <span className="text-amarillo">Territorio Bilingüe</span>
        </p>
        <ul
          aria-label="Entidades aliadas"
          className="grid gap-1 text-sm leading-relaxed text-white/70 md:grid-cols-2 md:gap-x-8 md:text-right"
        >
          {CREDITOS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
