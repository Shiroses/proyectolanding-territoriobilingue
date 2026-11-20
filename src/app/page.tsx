import Aliados from "@/components/Aliados";
import Footer from "@/components/Footer";
import Formacion from "@/components/Formacion";
import Header from "@/components/Header";
import MarcoNormativo from "@/components/MarcoNormativo";
import Participar from "@/components/Participar";
import Programa from "@/components/Programa";

/**
 * Versión comercial · distribución final del cliente:
 * 01 El programa · 02 Formación y postulación (con continuación) · 03 Cómo participar · 04 Aliados · 05 Marco normativo
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Programa />
        <Formacion />
        <Participar />
        <Aliados />
        <MarcoNormativo />
      </main>
      <Footer />
    </>
  );
}
