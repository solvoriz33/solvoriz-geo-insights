import { mockBreakdown, mockCitations, mockEngines, mockMetrics, mockMissingSources } from "./mockData";
import type {
  Citation,
  EngineVisibility,
  Metric,
  MissingSource,
  VisibilityBreakdown,
} from "./types";

const delay = (ms = 350) => new Promise((r) => setTimeout(r, ms));

export const analyticsService = {
  async getMetrics(): Promise<Metric[]> {
    await delay();
    return mockMetrics;
  },
  async getEngineBreakdown(): Promise<EngineVisibility[]> {
    await delay();
    return mockEngines;
  },
  async getVisibilityBreakdown(): Promise<VisibilityBreakdown[]> {
    await delay();
    return mockBreakdown;
  },
  async getCitations(): Promise<Citation[]> {
    await delay();
    return mockCitations;
  },
  async getMissingSources(): Promise<MissingSource[]> {
    await delay();
    return mockMissingSources;
  },
};
