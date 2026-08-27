import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { SidebarNav } from "./Sidebar";
import { Topbar } from "./Topbar";
import { AnalysisModal } from "./AnalysisModal";
import { ThemeChooser } from "./ThemeChooser";

export function AppShell({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);
  const [analysisOpen, setAnalysisOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login", replace: true });
  }, [loading, user, navigate]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <span className="text-sm text-muted-foreground">Loading workspace…</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full bg-background">
      <aside className="hidden w-60 shrink-0 border-r border-sidebar-border lg:block">
        <div className="sticky top-0 h-screen">
          <SidebarNav />
        </div>
      </aside>

      <Sheet open={drawer} onOpenChange={setDrawer}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SidebarNav onNavigate={() => setDrawer(false)} />
        </SheetContent>
      </Sheet>

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onOpenSidebar={() => setDrawer(true)} onRunAnalysis={() => setAnalysisOpen(true)} />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
          {children}
        </main>
      </div>

      <AnalysisModal open={analysisOpen} onOpenChange={setAnalysisOpen} />
      <ThemeChooser />
    </div>
  );
}

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
      <div className="min-w-0">
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </header>
  );
}
