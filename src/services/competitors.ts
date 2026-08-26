import { mockCompetitors } from "./mockData";
import type { Competitor } from "./types";

const delay = (ms = 350) => new Promise((r) => setTimeout(r, ms));

export const competitorsService = {
  async list(): Promise<Competitor[]> {
    await delay();
    return mockCompetitors;
  },
  async discover(): Promise<Competitor[]> {
    await delay(900);
    return mockCompetitors;
  },
};
