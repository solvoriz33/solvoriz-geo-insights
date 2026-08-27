import { Moon, Sun } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTheme } from "@/lib/theme";

export function ThemeChooser() {
  const { hasChosen, setTheme } = useTheme();

  return (
    <Dialog open={!hasChosen}>
      <DialogContent className="sm:max-w-md" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Choose your appearance</DialogTitle>
          <DialogDescription>
            Pick the theme for your workspace. You can change it anytime from the top bar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => setTheme("light")}
            className="flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:border-accent hover:bg-muted"
          >
            <Sun className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">Light</span>
            <span className="text-xs text-muted-foreground">Off-white, high clarity</span>
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:border-accent hover:bg-muted"
          >
            <Moon className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">Dark</span>
            <span className="text-xs text-muted-foreground">Deep ink, low glare</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
