import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { TrackedQuery } from "@/services/types";
import { cn } from "@/lib/utils";

function StatusBadge({ status }: { status: TrackedQuery["status"] }) {
  const styles: Record<TrackedQuery["status"], string> = {
    Recommended: "border-success/40 text-success",
    Mentioned: "border-accent/50 text-accent",
    "Not Found": "border-border text-muted-foreground",
  };
  return (
    <Badge variant="outline" className={cn("font-medium", styles[status])}>
      {status}
    </Badge>
  );
}

function Trend({ trend }: { trend: TrackedQuery["trend"] }) {
  if (trend === "up") return <ArrowUpRight className="h-4 w-4 text-success" />;
  if (trend === "down") return <ArrowDownRight className="h-4 w-4 text-destructive" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
}

export function QueryTable({ queries }: { queries: TrackedQuery[] }) {
  return (
    <>
      {/* Desktop table */}
      <div className="panel hidden overflow-x-auto md:block">
        <table className="w-full min-w-[860px] text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              {[
                "Query",
                "Category",
                "AI Engine",
                "Mentioned",
                "Recommended",
                "Position",
                "Trend",
                "Last Checked",
              ].map((h) => (
                <th key={h} className="label-eyebrow px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {queries.map((q) => (
              <tr key={q.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                <td className="max-w-xs truncate px-4 py-3 font-medium text-foreground">
                  {q.query}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{q.category}</td>
                <td className="px-4 py-3 text-muted-foreground">{q.engine}</td>
                <td className="px-4 py-3">{q.mentioned ? "Yes" : "No"}</td>
                <td className="px-4 py-3">{q.recommended ? "Yes" : "No"}</td>
                <td className="px-4 py-3 tabular-nums">{q.position ?? "—"}</td>
                <td className="px-4 py-3">
                  <Trend trend={q.trend} />
                </td>
                <td className="px-4 py-3 text-muted-foreground">{q.lastChecked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {queries.map((q) => (
          <div key={q.id} className="panel p-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <p className="min-w-0 text-sm font-medium text-foreground">{q.query}</p>
              <Trend trend={q.trend} />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <StatusBadge status={q.status} />
              <span className="text-xs text-muted-foreground">{q.engine}</span>
              <span className="text-xs text-muted-foreground">
                Position {q.position ?? "—"} · {q.lastChecked}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export { StatusBadge };
