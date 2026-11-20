import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { SITE, SITE_URL } from "@/lib/config";
import "./globals.css";

// Fuentes tomadas de la propuesta de referencia: DM Sans (texto) y Manrope (titulares).
const dmSans = DM_Sans({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.titulo,
  description: SITE.descripcion,
  keywords: [
    "Santander Territorio Bilingüe",
    "inglés gratis",
    "formación gratuita en inglés",
    "bilingüismo",
    "Gobernación de Santander",
    "FondoPAZ",
    "English Horizons",
    "inglés virtual gratis",
    "Universidad Santo Tomás",
    "víctimas del conflicto armado",
    "firmantes de paz",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITE.nombre,
    title: SITE.titulo,
    description: SITE.descripcion,
  },
  twitter: {
    card: "summary",
    title: SITE.titulo,
    description: SITE.descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#123165",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${dmSans.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-dvh bg-white text-negro">{children}</body>
    </html>
  );
}
