import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { ANALYSIS_STEPS } from "@/services/geoApi";
import { cn } from "@/lib/utils";

export function AnalysisProgress({
  onComplete,
  compact = false,
}: {
  onComplete?: () => void;
  compact?: boolean;
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= ANALYSIS_STEPS.length) {
      const t = setTimeout(() => onComplete?.(), 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 900 + Math.random() * 700);
    return () => clearTimeout(t);
  }, [step, onComplete]);

  const pct = Math.round((Math.min(step, ANALYSIS_STEPS.length) / ANALYSIS_STEPS.length) * 100);

  return (
    <div className={cn("w-full", compact ? "max-w-full" : "mx-auto max-w-xl")}>
      <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-accent transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <ol className="mt-6 space-y-1">
        {ANALYSIS_STEPS.map((label, i) => {
          const done = i < step;
          const active = i === step;
          return (
            <li
              key={label}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
                active && "bg-muted",
                !done && !active && "opacity-45",
              )}
            >
              <span className="w-6 font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 min-w-0 truncate text-foreground">{label}</span>
              {done && <Check className="h-4 w-4 shrink-0 text-success" />}
              {active && <Loader2 className="h-4 w-4 shrink-0 animate-spin text-accent" />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
