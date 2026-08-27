import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { EngineVisibility, MetricPoint, VisibilityBreakdown } from "@/services/types";

export function VisibilityTrend({ data }: { data: MetricPoint[] }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="trend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.28} />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--color-border)" vertical={false} />
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            fontSize={11}
            stroke="var(--color-muted-foreground)"
          />
          <YAxis
            domain={[0, 100]}
            tickLine={false}
            axisLine={false}
            fontSize={11}
            stroke="var(--color-muted-foreground)"
          />
          <Tooltip
            contentStyle={{
              background: "var(--color-popover)",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              fontSize: 12,
              color: "var(--color-popover-foreground)",
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="var(--color-accent)"
            strokeWidth={2}
            fill="url(#trend)"
            name="Visibility signal"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function EngineBars({ engines }: { engines: EngineVisibility[] }) {
  return (
    <ul className="space-y-4">
      {engines.map((e) => (
        <li key={e.engine}>
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <span className="min-w-0 truncate font-medium text-foreground">{e.engine}</span>
            <span className="shrink-0 tabular-nums text-muted-foreground">{e.visibility}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-accent" style={{ width: `${e.visibility}%` }} />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Observed visibility across {e.responses} tracked responses
          </p>
        </li>
      ))}
    </ul>
  );
}

export function BreakdownGrid({ items }: { items: VisibilityBreakdown[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg border border-border p-4">
          <div className="flex items-baseline justify-between gap-2">
            <p className="min-w-0 truncate text-sm font-medium text-foreground">{item.label}</p>
            <p className="shrink-0 text-sm tabular-nums text-foreground">{item.value}%</p>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-chart-2"
              style={{ width: `${item.value}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
