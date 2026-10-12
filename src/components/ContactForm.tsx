"use client";

import { useState } from "react";

const field =
  "box-border w-full rounded-[20px] border-0 bg-[rgb(209_209_209/.27)] p-[10px] font-[inherit] text-black placeholder:text-black/60 focus:border-2 focus:border-solid focus:border-navy focus:outline-none";

/** `split` puts name and e-mail side by side (contact page). */
export default function ContactForm({ split = false }: { split?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="m-0"
      onSubmit={(e) => {
        e.preventDefault();
        // No backend in this clone: the original posts to the Local.fr form service.
        setSent(true);
      }}
    >
      <div className="flex flex-col gap-[10px]">
        <div className={split ? "flex flex-col gap-[10px] md:flex-row" : "contents"}>
          <input type="text" name="nom" required placeholder="Votre nom*" className={field} />
          <input type="email" name="email" required placeholder="Votre email*" className={field} />
        </div>
        <input type="tel" name="telephone" required placeholder="Votre numéro de téléphone*" className={field} />
        <textarea name="message" rows={7} required placeholder="Votre message*" className={field} />
      </div>
      <div className="mt-3 grid">
        <label className="flex cursor-pointer items-start gap-2 text-[.85em]">
          <input type="checkbox" name="privacy_policy" required className="mt-1" />
          <span>
            J&apos;ai pris connaissance de la politique de gestion des données personnelles décrites dans{" "}
            <a href="https://www.pma-concept.fr/mentions-legales" target="_blank" className="underline">
              la politique de confidentialité
            </a>{" "}
            et j&apos;autorise PMA CONCEPT à m&apos;envoyer des informations sur ses produits et services.
          </span>
        </label>
        <div className="mt-3">
          <input type="submit" value="Envoyer" className="cursor-pointer border-0 bg-navy px-6 py-[10px] font-bold text-white" />
        </div>
        {sent && (
          <p role="status" className="mt-3 text-[.9em] font-semibold text-brand">
            Merci ! Votre message a bien été pris en compte (démonstration — aucun envoi réel).
          </p>
        )}
        <div className="mt-4 text-[.7em] leading-snug text-black/70">
          Pour traiter votre demande, local.fr utilisera et conservera vos données personnelles pendant 2 ans après notre dernier contact. Elles resteront confidentielles et ne seront pas partagées avec des tiers.
          <br />
          <br />
          Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous bénéficiez d&apos;un droit d&apos;accès et de rectification des données vous concernant, d&apos;un droit d&apos;opposition pour motifs légitimes, d&apos;un droit à l&apos;effacement des données. Vous disposez également d&apos;un droit à la récupération et à la portabilité des données dans certains cas spécifiquement prévus par la loi.
          <br />
          <br />
          Pour l&apos;exercice de vos droits veuillez contacter :
          <br />
          local.fr, 22 rue Gustave Léger 01000 Bourg en Bresse
          <br />
          contact@local.fr
          <br />
          Vous pouvez également vous opposer au démarchage téléphonique en vous inscrivant sur le site :{" "}
          <a href="https://www.bloctel.gouv.fr/" target="_blank" className="underline">
            Bloctel
          </a>
        </div>
      </div>
    </form>
  );
}
