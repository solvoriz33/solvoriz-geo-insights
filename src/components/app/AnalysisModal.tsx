import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AnalysisProgress } from "./AnalysisProgress";

export function AnalysisModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [scope, setScope] = useState("all");
  const [running, setRunning] = useState(false);

  const close = (next: boolean) => {
    onOpenChange(next);
    if (!next) setRunning(false);
  };

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Run AI Visibility Analysis</DialogTitle>
          <DialogDescription>
            Tracked queries are re-checked across AI engines. Results reflect observed responses,
            not official rankings.
          </DialogDescription>
        </DialogHeader>

        {running ? (
          <AnalysisProgress compact onComplete={() => close(false)} />
        ) : (
          <RadioGroup value={scope} onValueChange={setScope} className="gap-3 py-2">
            <div className="flex items-start gap-3 rounded-md border border-border p-3">
              <RadioGroupItem value="all" id="scope-all" className="mt-0.5" />
              <Label htmlFor="scope-all" className="cursor-pointer font-normal">
                <span className="block font-medium">Analyze all tracked queries</span>
                <span className="block text-xs text-muted-foreground">
                  Full re-check across every engine.
                </span>
              </Label>
            </div>
            <div className="flex items-start gap-3 rounded-md border border-border p-3">
              <RadioGroupItem value="selected" id="scope-selected" className="mt-0.5" />
              <Label htmlFor="scope-selected" className="cursor-pointer font-normal">
                <span className="block font-medium">Analyze selected queries</span>
                <span className="block text-xs text-muted-foreground">
                  Only queries flagged in the Queries view.
                </span>
              </Label>
            </div>
          </RadioGroup>
        )}

        {!running && (
          <DialogFooter>
            <Button variant="outline" onClick={() => close(false)}>
              Cancel
            </Button>
            <Button onClick={() => setRunning(true)}>Start Analysis</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
