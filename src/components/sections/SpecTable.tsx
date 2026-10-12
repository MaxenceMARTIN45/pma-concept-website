import type { SpecRow } from "@/lib/blocks";

type Props = {
  rows: SpecRow[];
  head?: [string, string];
  /** "light" on white/grey, "inverted" inside a blue panel */
  tone?: "light" | "inverted";
};

const line = { light: "border-brand", inverted: "border-white" } as const;

export default function SpecTable({ rows, head, tone = "light" }: Props) {
  return (
    <table className={`w-full border-collapse text-left ${tone === "inverted" ? "text-[.9em] italic text-white" : ""}`}>
      {head && (
        <thead>
          <tr className={`border-b ${line[tone]}`}>
            <th className="w-[35%] px-[6px] py-[6px] font-bold">{head[0]}</th>
            <th className="px-[6px] py-[6px] font-bold">{head[1]}</th>
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} className={`border-b ${line[tone]}`}>
            <td className={`w-[35%] px-[6px] align-top text-[.95em] ${tone === "inverted" ? "py-[5px]" : "py-[8px]"}`}>{label}</td>
            <td className={`whitespace-pre-line px-[6px] align-top text-[.95em] ${tone === "inverted" ? "py-[5px]" : "py-[8px]"}`}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
