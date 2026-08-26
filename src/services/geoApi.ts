import type { Business } from "./types";

/**
 * GEO engine service abstraction.
 * The real backend will crawl the site, extract the business entity, generate
 * queries, query AI models and score visibility. Swap these implementations.
 */

const KEY = "solvoriz.business";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const ANALYSIS_STEPS = [
  "Understanding your business",
  "Identifying your products and services",
  "Generating customer queries",
  "Analyzing AI visibility",
  "Comparing competitors",
  "Analyzing citations",
  "Building recommendations",
];

function read(): Business | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Business) : null;
  } catch {
    return null;
  }
}

function write(business: Business | null) {
  if (typeof window === "undefined") return;
  if (business) window.localStorage.setItem(KEY, JSON.stringify(business));
  else window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("solvoriz:business"));
}

export const geoApi = {
  getBusiness(): Business | null {
    return read();
  },

  saveBusiness(business: Business) {
    write(business);
  },

  getPendingInput(): string | null {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem("solvoriz.pendingInput");
  },

  setPendingInput(value: string | null) {
    if (typeof window === "undefined") return;
    if (value) window.localStorage.setItem("solvoriz.pendingInput", value);
    else window.localStorage.removeItem("solvoriz.pendingInput");
  },

  /** Creates the analyzed business record from a free-form input. */
  async createAnalysis(input: string): Promise<Business> {
    await delay(300);
    const isUrl = /\./.test(input) && !input.includes(" ");
    const name = isUrl
      ? input.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0]
      : input;
    const business: Business = {
      id: crypto.randomUUID(),
      name,
      website: isUrl ? input : "",
      industry: "Software",
      description: "",
      products: "",
      audience: "",
      analyzedAt: new Date().toISOString(),
    };
    write(business);
    return business;
  },

  subscribe(listener: () => void): () => void {
    if (typeof window === "undefined") return () => {};
    window.addEventListener("solvoriz:business", listener);
    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("solvoriz:business", listener);
      window.removeEventListener("storage", listener);
    };
  },
};
