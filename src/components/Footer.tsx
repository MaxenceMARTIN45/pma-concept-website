import Link from "next/link";
import { contact, nav, img } from "@/lib/site";

const MAPS = contact.maps;

// footer menu = main menu without the sub-pages
const menu = nav.map(({ label, href }) => [label, href] as const);

const legal = [
  ["Législation & RGPD", "/mentions-legales", "_self"],
  ["© 2025 PMA CONCEPT", "/mentions-legales#intellectual-property", "_self"],
  ["Mettre à jour mon site internet", "https://www.localetmoi.fr", "_blank"],
] as const;

const lift = "inline transition-transform hover:-translate-y-0.5";

function Icons() {
  return (
    <>
      <a href="tel:+33673081794">
        <img alt="Phone" src={img("Phone.png")} width={25} height={22} className={lift} />
      </a>
      &nbsp;&nbsp;
      <a href={MAPS} target="_blank">
        <img alt="Location" src={img("Location.png")} width={21} height={28} className={lift} />
      </a>
      &nbsp;&nbsp;&nbsp;
      <a href="mailto:ph.martin@pma-concept.com">
        <img alt="Email" src={img("Email.png")} width={27} height={17} className={lift} />
      </a>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="hidden bg-navy px-[5%] pb-[1%] pt-[2%] text-white md:block">
        <div className="flex">
          <div className="mt-[1%] w-1/4 text-[1.1em]">
            <p className="m-0 mb-[10px]">
              <Link href="/">
                <img alt="PMA Concept" src={img("logo-footer.webp")} className="mb-[2%] w-full max-w-[230px] bg-white px-[10px] py-[17px]" />
              </Link>
            </p>
            <p className="m-0">
              Conception et intégration de machines industrielles automatisées. Des solutions complètes de conditionnement, dosage et tri en France et en Europe.
            </p>
          </div>
          <div className="ml-[8.333%] w-1/3 p-[1%]">
            <div className="mb-[5%] px-[3%] py-[1.3%] text-[1.2em] font-bold tracking-[1px]">MENU</div>
            <div className="px-[3%] py-[1.3%] leading-none">
              {menu.map(([l, h]) => (
                <p key={l} className="m-0 mb-[10px]">
                  <Link href={h} className="text-inherit no-underline hover:underline">
                    {l}
                  </Link>
                </p>
              ))}
            </div>
          </div>
          <div className="w-1/4 p-[1%]">
            <div className="mb-[5%] px-[3%] py-[1.3%] text-[1.2em] font-bold tracking-[1px]">NOUS CONTACTER</div>
            <p className="m-0 mb-[2%] px-[3%] py-[1.3%]">
              <a href="tel:+33673081794">
                <img alt="Phone" src={img("Phone.png")} width={25} height={22} className="inline" />
              </a>
              &nbsp;{" "}
              <a href="tel:+33673081794" className="text-inherit no-underline">
                Appelez-nous
              </a>
            </p>
            <p className="m-0 mb-[2%] px-[3%] py-[1.3%]">
              <a href="mailto:ph.martin@pma-concept.com">
                <img alt="Email" src={img("Email.png")} width={27} height={17} className="inline" />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:ph.martin@pma-concept.com" className="text-inherit no-underline">
                Envoyez-nous vos demandes
              </a>
            </p>
            <p className="m-0 mb-[2%] px-[3%] py-[1.3%]">
              <a href={MAPS} target="_blank">
                <img alt="Location" src={img("Location.png")} width={21} height={28} className="inline align-top" />
              </a>
              &nbsp; 14 rue du devidet
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;45000 ORLÉANS
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;France
            </p>
          </div>
        </div>
        <div className="mt-[2%] flex border-t-[.5px] border-white p-[1vh] text-center text-[.8em] font-semibold tracking-[.5px]">
          <div className="ml-[8.333%] w-1/4 p-[1%]">
            <Link href={legal[0][1]} className="text-inherit no-underline">{legal[0][0]}</Link>
          </div>
          <div className="w-1/6 p-[1%]">
            <Link href={legal[1][1]} className="text-inherit no-underline">{legal[1][0]}</Link>
          </div>
          <div className="w-1/4 p-[1%]">
            <a href={legal[2][1]} target="_blank" className="text-inherit no-underline">{legal[2][0]}</a>
          </div>
          <div className="w-1/6 p-[1%]">
            Créé par{" "}
            <a href="https://www.local.fr/" target="_blank" className="text-inherit">Local.fr</a>
          </div>
        </div>
      </footer>

      <footer className="bg-navy pb-[60px] text-center text-white md:hidden">
        <div className="p-[1vh] text-[.8em] font-semibold tracking-[.5px]">
          {legal.map(([l, h, t]) => (
            <div key={l} className="p-[1%]">
              {t === "_blank" ? (
                <a href={h} target="_blank" className="text-inherit no-underline">{l}</a>
              ) : (
                <Link href={h} className="text-inherit no-underline">{l}</Link>
              )}
            </div>
          ))}
          <div className="p-[1%]">
            Créé par{" "}
            <a href="https://www.local.fr/" target="_blank" className="text-inherit">Local.fr</a>
          </div>
        </div>
        <div className="p-[.7%]">
          <Icons />
        </div>
      </footer>
      <div className="fixed bottom-0 z-[490] w-full bg-navy px-[1.5%] py-[10px] text-center text-white md:hidden">
        <Icons />
      </div>
    </>
  );
}
