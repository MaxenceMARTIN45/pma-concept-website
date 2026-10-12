import Link from "next/link";
import { Fragment } from "react";

/**
 * Tiny inline markup used by the content files:
 *   **bold**   [underlined link](/href)   line breaks with \n
 */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(TOKEN).map((part, i) => {
            if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
            const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
            if (link) {
              return (
                <Link key={i} href={link[2]} className="underline">
                  {link[1]}
                </Link>
              );
            }
            return part;
          })}
        </Fragment>
      ))}
    </>
  );
}
