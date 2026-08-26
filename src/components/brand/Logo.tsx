import logo from "@/assets/solvoriz-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showWordmark = true,
  compact = false,
}: {
  className?: string;
  showWordmark?: boolean;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <img
        src={logo.url}
        alt="Solvoriz GEO logo"
        className="h-7 w-7 shrink-0 object-contain dark:invert"
      />
      {showWordmark && (
        <span className={cn("min-w-0 leading-none", compact && "hidden md:block")}>
          <span className="block text-sm font-semibold tracking-[0.18em] text-foreground">
            SOLVORIZ
          </span>
          <span className="block text-[0.625rem] font-medium tracking-[0.32em] text-accent">
            GEO
          </span>
        </span>
      )}
    </span>
  );
}
