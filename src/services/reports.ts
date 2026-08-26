import { mockRecommendations, mockReports } from "./mockData";
import type { Recommendation, Report } from "./types";

const delay = (ms = 350) => new Promise((r) => setTimeout(r, ms));

export const reportsService = {
  async list(): Promise<Report[]> {
    await delay();
    return mockReports;
  },
  async generate(): Promise<Report> {
    await delay(1200);
    return mockReports[0];
  },
  async export(_format: "pdf" | "csv"): Promise<void> {
    await delay(700);
  },
};

export const recommendationsService = {
  async list(): Promise<Recommendation[]> {
    await delay();
    return mockRecommendations;
  },
};
