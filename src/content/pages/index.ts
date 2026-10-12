import type { PageData } from "@/lib/blocks";
import { accessoiresIndustriels } from "./accessoires-industriels";
import { doseuses } from "./doseuses";
import { ensacheusePreformes } from "./ensacheuse-preformes";
import { ensacheuseSousVide } from "./ensacheuse-sous-vide";
import { ensacheuseVerticale } from "./ensacheuse-verticale";
import { ensacheuses } from "./ensacheuses";
import { maintenanceDepannage } from "./maintenance-depannage";
import { remplisseuses } from "./remplisseuses";
import { triOptique } from "./tri-optique";

export const pages: PageData[] = [
  ensacheuses,
  ensacheuseVerticale,
  ensacheusePreformes,
  ensacheuseSousVide,
  doseuses,
  accessoiresIndustriels,
  remplisseuses,
  triOptique,
  maintenanceDepannage,
];

export const getPage = (slug: string) => pages.find((p) => p.slug === slug);
