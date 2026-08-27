import { Badge } from "@/components/ui/badge";
import type { Citation, MissingSource } from "@/services/types";

export function CitationTable({ citations }: { citations: Citation[] }) {
  return (
    <>
      <div className="panel hidden overflow-x-auto md:block">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              {["Source", "Source type", "Mentions", "Authority", "Last seen", "Impact"].map((h) => (
                <th key={h} className="label-eyebrow px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {citations.map((c) => (
              <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                <td className="px-4 py-3 font-medium text-foreground">{c.source}</td>
                <td className="px-4 py-3 text-muted-foreground">{c.type}</td>
                <td className="px-4 py-3 tabular-nums">{c.mentions}</td>
                <td className="px-4 py-3 tabular-nums">{c.authority}</td>
                <td className="px-4 py-3 text-muted-foreground">{c.lastSeen}</td>
                <td className="px-4 py-3">
                  <Badge variant="outline">{c.impact}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {citations.map((c) => (
          <div key={c.id} className="panel p-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <p className="min-w-0 truncate text-sm font-medium text-foreground">{c.source}</p>
              <Badge variant="outline" className="shrink-0">
                {c.impact}
              </Badge>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {c.type} · {c.mentions} mentions · authority {c.authority} · {c.lastSeen}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export function MissingSources({ sources }: { sources: MissingSource[] }) {
  return (
    <div className="panel p-5">
      <h2 className="text-base font-semibold text-foreground">Missing sources</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Sources cited for competitors that do not currently reference your business.
      </p>
      <ul className="mt-4 space-y-3">
        {sources.map((s) => (
          <li key={s.id} className="rounded-lg border border-border p-4">
            <p className="text-sm font-medium text-foreground">{s.source}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.why}</p>
            <p className="mt-2 text-sm text-foreground">
              <span className="label-eyebrow mr-2">Action</span>
              {s.action}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
