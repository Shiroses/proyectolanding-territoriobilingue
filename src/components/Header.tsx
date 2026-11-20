import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Container } from "./ui";

const links = [
  { href: "/#programa", label: "El programa" },
  { href: "/#formacion", label: "Formación y postulación" },
  { href: "/#participar", label: "Cómo participar" },
  { href: "/#aliados", label: "Aliados" },
  { href: "/#marco-normativo", label: "Marco normativo" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e6ebf1] bg-white/95 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Saltar al contenido
      </a>
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link href="/#programa" className="flex min-w-0 items-center gap-2.5 sm:gap-[13px]" aria-label="Santander Territorio Bilingüe, ir al inicio">
          <Image
            src="/images/logos/usta.svg"
            alt="Universidad Santo Tomás"
            width={166}
            height={48}
            className="h-[41px] w-[130px] shrink-0 object-contain object-left sm:h-12 sm:w-[166px]"
            preload
          />
          <span aria-hidden="true" className="h-7 w-px shrink-0 bg-[#d8dfe7] sm:h-[33px]" />
          <span className="text-[10px] leading-[1.35] font-extrabold tracking-[0.01em] text-[#334968] sm:text-xs">
            Santander<br />Territorio Bilingüe
          </span>
        </Link>

        {/* Menú de escritorio */}
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-[#334968] xl:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-azul">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menú móvil (sin JavaScript) */}
        <details className="group relative shrink-0 lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-navy ring-1 ring-[#d8dfe7] [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" className="size-5" />
            <span className="sr-only sm:not-sr-only">Menú</span>
          </summary>
          <nav
            aria-label="Secciones"
            className="absolute right-0 mt-2 w-64 rounded-2xl bg-azul p-2 shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/15"
          >
            <ul className="flex flex-col text-base text-white">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block rounded-xl px-4 py-3 hover:bg-white/10">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </Container>
    </header>
  );
}
