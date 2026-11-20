import type { ReactNode } from "react";

/** Contenedor horizontal común (ancho máximo + márgenes laterales). */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** Etiqueta pequeña sobre los títulos de sección. */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-display mb-4 inline-flex items-center gap-2 text-sm font-bold tracking-[0.08em] uppercase ${
        dark ? "text-amarillo" : "text-azul"
      }`}
    >
      <span aria-hidden="true" className={`h-0.5 w-6 rounded-full ${dark ? "bg-amarillo" : "bg-naranja"}`} />
      {children}
    </p>
  );
}

/** Franja de colores de la paleta USTA (motivo gráfico del manual). */
export function ColorBar({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex h-1.5 w-full ${className}`}>
      <span className="flex-[3] bg-azul" />
      <span className="flex-1 bg-amarillo" />
      <span className="flex-1 bg-naranja" />
      <span className="flex-1 bg-rojo" />
      <span className="flex-1 bg-cian" />
    </div>
  );
}
