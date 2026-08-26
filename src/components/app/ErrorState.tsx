import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function ErrorState({
  title = "We couldn't complete the analysis.",
  description = "Something interrupted the request. You can try again or return to your dashboard.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="panel flex flex-col items-center justify-center px-6 py-14 text-center">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {onRetry && <Button onClick={onRetry}>Try Again</Button>}
        <Button variant="outline" asChild>
          <Link to="/dashboard">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
