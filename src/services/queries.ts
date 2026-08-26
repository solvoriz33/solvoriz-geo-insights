import { mockQueries } from "./mockData";
import type { TrackedQuery } from "./types";

const delay = (ms = 350) => new Promise((r) => setTimeout(r, ms));

let queries: TrackedQuery[] = [...mockQueries];

export const queriesService = {
  async list(): Promise<TrackedQuery[]> {
    await delay();
    return queries;
  },
  async add(query: string, category: string): Promise<TrackedQuery> {
    await delay(200);
    const item: TrackedQuery = {
      id: crypto.randomUUID(),
      query,
      category: category || "Custom",
      engine: "All engines",
      mentioned: false,
      recommended: false,
      position: null,
      trend: "flat",
      lastChecked: "Not checked",
      status: "Not Found",
    };
    queries = [item, ...queries];
    return item;
  },
  async remove(id: string): Promise<void> {
    await delay(150);
    queries = queries.filter((q) => q.id !== id);
  },
};
