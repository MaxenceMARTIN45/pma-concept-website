import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact de technicien industriel à Orléans | Devis offert",
  description:
    "Contactez PMA Concept pour vos besoins en gestion et commercialisation de machines industrielles en France et en Europe. Contactez-nous.",
};

// 14 rue du Devidet, Orléans
const LAT = 47.9146338;
const LON = 1.9124404;
const d = 0.004;
const bbox = [LON - d * 1.6, LAT - d, LON + d * 1.6, LAT + d].join("%2C");
const map = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${LAT}%2C${LON}`;

export default function Contact() {
  return (
    <section className="bg-white px-[5%] py-[3%] md:px-[16%]">
      <h1 className="m-0 mb-[1%] text-center text-[calc(1.5em+.4vw)] font-semibold text-black">Technicien industriel – PMA Concept à Orléans</h1>
      <p className="mb-[2%] mt-0 text-center md:text-left">
        N’hésitez pas à nous adresser vos demandes à l’aide de ce formulaire de contact. Nous vous répondrons dans les plus brefs délais.
      </p>
      <div className="md:flex md:gap-[3%]">
        <div className="md:w-[56%]">
          <ContactForm split />
        </div>
        <div className="mt-6 md:mt-0 md:w-[41%]">
          <div className="relative overflow-hidden">
            <iframe title="Plan : PMA Concept, Orléans" src={map} loading="lazy" className="block h-[320px] w-full border-0" />
            <div className="pointer-events-none absolute left-1/2 top-3 hidden -translate-x-1/2 bg-white p-2 text-center text-[.7em] shadow-md md:block">
              <img src={img("pma-concept-maps.webp")} alt="PMA Concept" className="mx-auto w-[90px]" />
              45000 ORLÉANS
              <br />
              Tél : +33673081794
            </div>
          </div>
          <p className="mt-2 text-[.85em]">
            45000 ORLÉANS
            <br />
            Tél : <a href="tel:+33673081794">+33673081794</a>
          </p>
        </div>
      </div>
    </section>
  );
}
