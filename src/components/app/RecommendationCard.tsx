import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Recommendation } from "@/services/types";
import { cn } from "@/lib/utils";

const priorityStyles: Record<Recommendation["priority"], string> = {
  Critical: "border-destructive/40 text-destructive",
  "High Impact": "border-warning/50 text-warning",
  "Medium Impact": "border-accent/50 text-accent",
  Completed: "border-success/40 text-success",
};

export function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="panel p-5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-foreground">{recommendation.title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            <span className="label-eyebrow mr-2">Why it matters</span>
            {recommendation.why}
          </p>
        </div>
        <Badge variant="outline" className={cn("shrink-0", priorityStyles[recommendation.priority])}>
          {recommendation.priority}
        </Badge>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span>
          Impact: <span className="text-foreground">{recommendation.impact}</span>
        </span>
        <span>
          Effort: <span className="text-foreground">{recommendation.effort}</span>
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto gap-1"
          onClick={() => setOpen((o) => !o)}
        >
          View Action Plan
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
        </Button>
      </div>

      {open && (
        <ol className="mt-4 space-y-2 border-t border-border pt-4">
          {recommendation.steps.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm text-foreground">
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">{step}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
