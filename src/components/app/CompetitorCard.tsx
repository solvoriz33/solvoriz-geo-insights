import { Button } from "@/components/ui/button";
import type { Competitor } from "@/services/types";
import { cn } from "@/lib/utils";

export function CompetitorCard({ competitor, max }: { competitor: Competitor; max: number }) {
  const pct = Math.round((competitor.score / max) * 100);
  return (
    <div
      className={cn(
        "panel p-4",
        competitor.isYou && "border-accent/60 ring-1 ring-accent/20",
      )}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <p className="min-w-0 truncate text-sm font-medium text-foreground">{competitor.name}</p>
        <p className="shrink-0 text-lg font-semibold tabular-nums text-foreground">
          {competitor.score}
        </p>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full", competitor.isYou ? "bg-accent" : "bg-chart-3")}
          style={{ width: `${pct}%` }}
        />
      </div>
      <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <dt className="text-[0.6875rem] text-muted-foreground">Shared</dt>
          <dd className="text-sm tabular-nums text-foreground">{competitor.sharedQueries}</dd>
        </div>
        <div>
          <dt className="text-[0.6875rem] text-muted-foreground">Wins</dt>
          <dd className="text-sm tabular-nums text-foreground">{competitor.wins}</dd>
        </div>
        <div>
          <dt className="text-[0.6875rem] text-muted-foreground">Lost opps</dt>
          <dd className="text-sm tabular-nums text-foreground">{competitor.lostOpportunities}</dd>
        </div>
      </dl>
    </div>
  );
}

export function GapCard({ competitors }: { competitors: Competitor[] }) {
  const rivals = competitors.filter((c) => !c.isYou);
  return (
    <div className="panel p-5">
      <h2 className="text-base font-semibold text-foreground">
        Why competitors are being recommended
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Observed patterns across tracked responses, not official rankings.
      </p>
      <ul className="mt-4 space-y-3">
        {rivals.map((c) => (
          <li
            key={c.id}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-border p-4"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">{c.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.reason}</p>
            </div>
            <Button variant="outline" size="sm" className="shrink-0">
              View Gap
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
