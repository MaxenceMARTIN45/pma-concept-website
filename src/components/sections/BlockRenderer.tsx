import BannerCard from "./BannerCard";
import CtaCard from "./CtaCard";
import Faq from "./Faq";
import FeatureRows from "./FeatureRows";
import ImageStrip from "./ImageStrip";
import ProductList from "./ProductList";
import SectionIntro from "./SectionIntro";
import SplitBand from "./SplitBand";
import type { Block } from "@/lib/blocks";

/** Maps a content block (see lib/blocks.ts) to its section component. */
export default function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "intro":
      return (
        <div className="bg-[#f6f6f6] pt-[1%]">
          <SectionIntro {...block} />
        </div>
      );
    case "rows":
      return (
        <div className="bg-[#f6f6f6] pb-[2%]">
          <FeatureRows items={block.items} divider={block.divider} />
        </div>
      );
    case "products":
      return (
        <div className="bg-[#f6f6f6] pb-[2%]">
          <ProductList items={block.items} divider={block.divider} />
        </div>
      );
    case "banner":
      return <BannerCard {...block} />;
    case "band":
      return (
        <SplitBand {...block}>{block.faq && <Faq />}</SplitBand>
      );
    case "strip":
      return <ImageStrip images={block.images} />;
    case "cta":
      return (
        <div className="bg-[#f6f6f6]">
          <CtaCard {...block} />
        </div>
      );
  }
}
