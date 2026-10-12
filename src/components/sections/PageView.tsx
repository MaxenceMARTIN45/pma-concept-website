import BlockRenderer from "./BlockRenderer";
import PageHero from "./PageHero";
import type { PageData } from "@/lib/blocks";

export default function PageView({ page }: { page: PageData }) {
  return (
    <>
      <PageHero hero={page.hero} />
      {page.blocks.map((b, i) => (
        <BlockRenderer key={i} block={b} />
      ))}
    </>
  );
}
