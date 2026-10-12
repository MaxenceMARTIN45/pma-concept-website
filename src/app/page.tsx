import ContactForm from "@/components/ContactForm";
import BannerCard from "@/components/sections/BannerCard";
import FeatureRows from "@/components/sections/FeatureRows";
import SectionIntro from "@/components/sections/SectionIntro";
import SplitBand from "@/components/sections/SplitBand";
import Button from "@/components/ui/Button";
import type { RowItem } from "@/lib/blocks";
import { img } from "@/lib/site";

const pillars = [
  {
    icon: "i1.webp",
    title: ["Plus de 25 ans d’expertise", "industrielle"],
    text: "Plus de deux décennies d’expérience dans la conception et l’intégration de machines automatisées pour tous secteurs industriels.",
    blue: true,
  },
  {
    icon: "i2.webp",
    title: ["Solutions", "globales", "clés en main"],
    text: "De l’étude à la mise en service, nous prenons en charge vos lignes de conditionnement, remplissage et tri optique avec un accompagnement complet.",
  },
  {
    icon: "i3.webp",
    title: ["Service technique", "en France et", "Europe"],
    text: "Intervention rapide, maintenance sur site et assistance à distance pour garantir la performance continue de vos installations.",
  },
];

const solutions: RowItem[] = [
  {
    image: "ensacheuse.webp",
    alt: "ensacheuse et accessoires",
    title: "Ensacheuse",
    href: "/ensacheuses",
    text: "Nous proposons des ensacheuses verticales et horizontales capables de former, remplir et sceller des sachets de poudre, grains ou confiseries.\nPour les produits sensibles, nous intégrons également des ensacheuses pour sachets préformés et à gueule ouverte, ainsi que des ensacheuses sous vide pour tubes horizontaux. Ces machines assurent un conditionnement continu et précis, adapté à tous types de produits secs ou granulés.",
  },
  {
    image: "doseur.png",
    alt: "doseur linéaire 2 couloirs poudre ou granules",
    title: "Doseurs",
    href: "/doseuses",
    text: "Nos doseurs industriels sont conçus pour tous types de produits : poudre, granulés, liquides ou pâteux.\nIls peuvent être volumétriques, pondéraux ou peseuses associatives, offrant un dosage précis et fiable pour chaque format et cadence de production.\nIls s’intègrent parfaitement à vos lignes de conditionnement et garantissent régularité et productivité.",
  },
  {
    image: "accessoires.png",
    alt: "C tapis d'alimentation automatique aspirant avec margeur et mise en lot",
    title: "Accessoires et périphériques industriels",
    href: "/accessoires-industriels",
    text: "Complétez vos lignes de production avec des étiqueteuses automatiques, imprimantes industrielles, détecteurs de métaux ou tapis de pesage. Ces accessoires s’intègrent facilement à vos équipements existants, améliorant traçabilité et contrôle qualité.",
  },
  {
    image: "remplisseuse.png",
    alt: "remplisseuse tube PE",
    title: "Remplisseuses automatiques",
    href: "/remplisseuses",
    text: "Nos remplisseuses automatisées assurent le dosage régulier de produits fluides ou pâteux dans des contenants rigides : pots, tubes, flacons ou bouteilles.\nLe choix de la technologie de remplissage dépend du produit, de la cadence et du format, garantissant une production efficace, précise et propre pour tous vos besoins industriels.",
  },
  {
    image: "trieur.png",
    alt: "trieur optique à étage pour tri multiple",
    title: "Tri optique",
    href: "/tri-optique",
    text: "Nos trieurs optiques à détection par caméra analysent rapidement la qualité des produits granulaires comme le riz, le blé ou les graines.\nLe système identifie les défauts et déclenche un module de rejet par air comprimé, réduisant les pertes et optimisant la qualité finale de votre production.",
  },
];

const maintenanceList = ["Assistance à distance ou sur site", "Contrats de maintenance préventive", "Rétrofit et mise à niveau technique"];

export default function Home() {
  return (
    <div className="bg-[#f6f6f6]">
      {/* Hero */}
      <section className="bg-cover bg-center" style={{ backgroundImage: `url(${img("bandeau.webp")})` }}>
        <div className="bg-cover bg-center px-[1%] pb-[4%] pt-[1%] md:w-[58.333%]" style={{ backgroundImage: `url(${img("fond1.png")})` }}>
          <div className="hidden py-[1%] pl-[3%] pr-[1%] md:block">
            <img alt="PMA Concept" src={img("logo.webp")} style={{ maxWidth: 323, width: "100%" }} />
          </div>
          <div className="px-[1%]">
            <h1 className="m-0 px-[3%] py-[1%] text-left font-semibold leading-[1.1] text-black" style={{ fontSize: "calc(1.7em + 0.2vw)" }}>
              Machines industrielles automatisées à Orléans.&nbsp;Solutions de conditionnement, tri et remplissage
            </h1>
            <article className="p-[3%] md:w-[83.333%]">
              <p>
                PMA Concept conçoit, commercialise et intègre des machines industrielles automatisées en&nbsp;
                <br />
                France et en Europe.
                <br />
                &nbsp;Avec plus de 20 ans d’expérience, notre équipe accompagne les entreprises industrielles dans la mise en place de lignes complètes de{" "}
                <strong>conditionnement, remplissage et tri optique</strong>, tout en assurant la maintenance et le dépannage de vos équipements.
              </p>
              <p>Nous garantissons des installations performantes, conformes aux normes techniques et parfaitement adaptées à vos besoins de production.</p>
            </article>
            <div className="md:flex">
              <div className="px-[3%] py-[1%] md:w-1/3">
                <Button href="/contact" block>
                  Demandez un devis
                </Button>
              </div>
              <div className="px-[3%] py-[1%] md:w-1/3">
                <Button href="tel:+33673081794" tone="outline" block>
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <div className="bg-cover bg-center px-[1%]" style={{ backgroundImage: `url(${img("fond2.webp")})` }}>
        <div className="p-[1%] md:ml-[33.333%] md:mt-[-5%] md:flex md:w-2/3">
          {pillars.map((p) => (
            <div key={p.icon} className="p-[1%] md:w-1/3">
              <div className={`h-full rounded-2xl px-[6%] py-[3%] ${p.blue ? "bg-brand text-white" : "bg-[#eaeef0]"}`}>
                <div className="px-[1%] py-[1vh]">
                  <img alt="" src={img(p.icon)} style={{ maxWidth: 100, width: "100%" }} />
                </div>
                <div className="min-h-[140px] px-[1%] py-[6%] text-[1.5em] font-medium">
                  {p.title.map((t, i) => (
                    <span key={i}>
                      {t}
                      <br />
                    </span>
                  ))}
                </div>
                <div className="min-h-[160px] px-[1%] pb-[6%]">{p.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <section className="p-[1%]">
        <SectionIntro
          title="Nos solutions industrielles globales"
          text={"PMA Concept accompagne les industriels en France et en Europe avec des solutions complètes et modulables pour l’automatisation, le conditionnement, le tri et le remplissage.\nDe la conception à la maintenance, nous mettons notre expertise au service de vos projets pour garantir performance, fiabilité et adaptabilité."}
          cta={{ label: "Prenez contact avec nos experts", href: "/contact" }}
          ctaCentered
          narrow
          divider
        />
        <FeatureRows items={solutions} divider />
        <div className="flex justify-center p-[3%]">
          <Button href="/contact">Prenez contact avec nos experts</Button>
        </div>
      </section>

      {/* Maintenance */}
      <BannerCard
        image="maintenance.webp"
        alt="Maintenance, rétrofit et dépannage à Orléans"
        title="Maintenance, rétrofit et dépannage"
        titleClass="m-0 px-[3%] text-[calc(1.7em+1vw)] font-medium leading-[1.15]"
        text="Nos techniciens assurent un service après-vente complet sur vos installations industrielles :"
        cta={{ label: "Planifier une intervention", href: "/maintenance-depannage" }}
      >
        <ul className="m-0 list-none px-[3%] py-[1%] leading-[3]">
          {maintenanceList.map((l) => (
            <li key={l}>
              <img alt="" src={img("puce2.webp")} width={32} height={32} className="mr-2 inline h-8 w-8 align-middle" />
              {l}
            </li>
          ))}
          <li className="leading-[3]">Grâce à une intervention rapide et à un suivi sur 12 mois, nous garantissons la fiabilité et la longévité de vos machines industrielles.</li>
        </ul>
      </BannerCard>

      {/* 25 ans */}
      <SplitBand
        title="25 ans d’expertise en automatisme et machines industrielles"
        image="expertise.webp"
        alt="25 ans d’expertise en automatisme et machines industrielles à Orléans"
        flush
      >
        <div className="px-[3%] py-[1.3%]">
          <p>
            Depuis plus de 25 ans, PMA Concept met son savoir-faire en électrotechnique et automatisme au service des industriels en France et en Europe.
            <br />
            Basée à Orléans, l’entreprise conçoit, conseille et intègre des solutions sur mesure pour l’automatisation et l’optimisation des procédés de fabrication.
          </p>
          <p>
            Grâce à un réseau de partenaires fiables et à une expérience reconnue, PMA Concept accompagne ses clients à chaque étape : de l’étude à la mise en œuvre, en garantissant des installations performantes, durables et conformes aux normes en vigueur.
          </p>
        </div>
      </SplitBand>

      {/* Zone */}
      <div className="bg-[rgb(246_246_246/.95)] bg-cover bg-center px-[3%] py-[3%]" style={{ backgroundImage: `url(${img("fond4.webp")})` }}>
        <div className="rounded-2xl bg-[#ececee] px-[3%] pb-[1.65%] pt-[3%] md:ml-[16.667%] md:w-2/3">
          <div className="md:flex">
            <h2 className="h-title m-0 mt-[3%] px-[3%] leading-[1.1] !text-black md:w-5/12">Zone d’intervention</h2>
            <p className="mb-[1%] mt-0 px-[3%] py-[1.5%] text-black md:w-7/12">
              Basée à Orléans (45000), PMA Concept intervient dans toute la France et l’Europe pour l’installation, la maintenance et le dépannage de vos équipements automatisés. <br />
              Notre équipe assure une réactivité optimale sur tous vos sites industriels.
            </p>
          </div>
          <div className="md:flex md:items-start">
            <article className="p-[1%] md:w-1/2 md:text-right">
              <img alt="Zone d’intervention à Orléans" src={img("zone.webp")} style={{ maxWidth: 530, width: "100%" }} className="md:ml-auto" />
            </article>
            <div className="p-[1%] md:w-1/2">
              <div className="overflow-hidden rounded-[25px]">
                <iframe
                  title="Carte d’Orléans"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  width="100%"
                  height="265"
                  className="block border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50762.854695092225!2d1.8765420976311296!3d47.90422819455509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4fb2fcfc1db15%3A0x1c0dc8da454840e0!2s45000%20Orl%C3%A9ans%2C%20France!5e1!3m2!1sfr!2stn!4v1764108339978!5m2!1sfr!2stn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-[rgb(246_246_246/.95)] p-[3%] md:flex">
        <div className="p-[1%] md:mt-[4.5%] md:w-1/3">
          <h2 className="m-0 px-[3%] py-[1%] font-semibold text-black" style={{ fontSize: "calc(1.7em + 0.2vw)" }}>
            <span className="block">Contactez</span>
            <span className="block">PMA Concept</span>
          </h2>
          <p className="m-0 px-[3%] py-[1%] text-black">
            Besoin d’un accompagnement sur un projet industriel ? <br />
            Nos experts vous conseillent sur le choix des machines les plus adaptées à vos cadences, formats et contraintes d’implantation. <br />
            Bénéficiez d’un suivi technique rigoureux, de l’étude à la mise en service.
          </p>
        </div>
        <div className="bg-[rgb(246_246_246/.95)] p-[3%] shadow-[-10px_10px_6px_rgb(0_0_0/.1)] md:w-2/3">
          <div className="mb-[1%] px-[3%] py-[1%] font-bold text-black">Contactez-nous pour vos projets industriels</div>
          <div className="p-[1%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
