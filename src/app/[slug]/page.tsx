import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageView from "@/components/sections/PageView";
import { getPage, pages } from "@/content/pages";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return pages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const page = getPage(params.slug);
  return page ? { title: page.title, description: page.description } : {};
}

export default function Page({ params }: { params: Params }) {
  const page = getPage(params.slug);
  if (!page) notFound();
  return <PageView page={page} />;
}
