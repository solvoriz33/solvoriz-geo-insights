import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import type { Metric } from "@/services/types";

export function MetricCard({ metric }: { metric: Metric }) {
  const up = metric.change > 0;
  const flat = metric.change === 0;
  const Icon = flat ? Minus : up ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="panel p-4">
      <p className="label-eyebrow">{metric.label}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="text-3xl font-semibold tabular-nums text-foreground">
            {metric.value}
            <span className="ml-1 text-sm font-normal text-muted-foreground">
              {metric.unit === "score" ? "/100" : "%"}
            </span>
          </p>
          <p
            className={cn(
              "mt-1 flex items-center gap-1 text-xs font-medium",
              flat ? "text-muted-foreground" : up ? "text-success" : "text-destructive",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {Math.abs(metric.change).toFixed(1)}
            <span className="font-normal text-muted-foreground">vs previous period</span>
          </p>
        </div>
        <div className="h-12 w-24 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={metric.history}>
              <defs>
                <linearGradient id={`grad-${metric.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="var(--color-accent)"
                strokeWidth={1.75}
                fill={`url(#grad-${metric.key})`}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
