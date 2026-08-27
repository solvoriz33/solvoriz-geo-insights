import { useNavigate } from "@tanstack/react-router";
import { Bell, LogOut, Menu, Moon, Play, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/lib/theme";
import { useBusiness } from "@/hooks/useBusiness";

export function Topbar({
  onOpenSidebar,
  onRunAnalysis,
}: {
  onOpenSidebar: () => void;
  onRunAnalysis: () => void;
}) {
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const { business } = useBusiness();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/", replace: true });
  };

  return (
    <header className="sticky top-0 z-30 grid h-14 shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur">
      <div className="flex min-w-0 items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onOpenSidebar}
          aria-label="Open navigation"
        >
          <Menu className="h-4 w-4" />
        </Button>
        <span className="min-w-0 truncate text-sm font-medium text-foreground">
          {business?.name ?? user?.company ?? "Personal workspace"}
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        <Button size="sm" onClick={onRunAnalysis} className="gap-1.5">
          <Play className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Run Analysis</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="grid h-8 w-8 place-items-center rounded-full bg-muted text-xs font-semibold uppercase text-foreground"
              aria-label="Profile"
            >
              {user?.name?.[0] ?? "S"}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel className="truncate">{user?.email ?? "Member"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate({ to: "/dashboard/settings" })}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2 h-3.5 w-3.5" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
