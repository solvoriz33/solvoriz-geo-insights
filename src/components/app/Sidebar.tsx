import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Bot,
  CircleHelp,
  FileText,
  Lightbulb,
  Link2,
  LayoutDashboard,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { useAuth } from "@/hooks/useAuth";

const nav = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/visibility", label: "AI Visibility", icon: BarChart3 },
  { to: "/dashboard/queries", label: "Queries", icon: Search },
  { to: "/dashboard/competitors", label: "Competitors", icon: Users },
  { to: "/dashboard/citations", label: "Citations", icon: Link2 },
  { to: "/dashboard/recommendations", label: "Recommendations", icon: Lightbulb },
  { to: "/dashboard/reports", label: "Reports", icon: FileText },
] as const;

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const { user } = useAuth();

  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex h-14 items-center border-b border-sidebar-border px-4">
        <Link to="/dashboard" onClick={onNavigate}>
          <Logo />
        </Link>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto p-3">
        {nav.map(({ to, label, icon: Icon, ...rest }) => (
          <Link
            key={to}
            to={to}
            onClick={onNavigate}
            activeOptions={{ exact: "exact" in rest ? rest.exact : false }}
            activeProps={{
              className: "bg-sidebar-accent text-sidebar-accent-foreground font-medium",
            }}
            className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent/60"
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="truncate">{label}</span>
          </Link>
        ))}
      </nav>

      <div className="space-y-0.5 border-t border-sidebar-border p-3">
        <Link
          to="/dashboard/settings"
          onClick={onNavigate}
          activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
          className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent/60"
        >
          <Settings className="h-4 w-4 shrink-0" />
          Settings
        </Link>
        <a
          href="mailto:support@solvoriz.com"
          className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent/60"
        >
          <CircleHelp className="h-4 w-4 shrink-0" />
          Help
        </a>
        <div className="mt-2 flex items-center gap-2.5 rounded-md border border-sidebar-border px-3 py-2">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sidebar-accent text-xs font-semibold uppercase text-sidebar-accent-foreground">
            {user?.name?.[0] ?? <Bot className="h-3.5 w-3.5" />}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-xs font-medium text-sidebar-foreground">
              {user?.name ?? "Member"}
            </span>
            <span className="block truncate text-[0.6875rem] text-muted-foreground">
              {user?.email ?? ""}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
