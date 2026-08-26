export type User = {
  id: string;
  name: string;
  email: string;
  company?: string;
};

export type Business = {
  id: string;
  name: string;
  website: string;
  industry: string;
  description: string;
  products: string;
  audience: string;
  analyzedAt: string;
};

export type MetricPoint = { label: string; value: number };

export type Metric = {
  key: string;
  label: string;
  value: number;
  unit: "score" | "percent";
  change: number;
  history: MetricPoint[];
};

export type EngineVisibility = {
  engine: string;
  visibility: number;
  responses: number;
};

export type VisibilityBreakdown = {
  label: string;
  value: number;
  description: string;
};

export type QueryStatus = "Mentioned" | "Recommended" | "Not Found";

export type TrackedQuery = {
  id: string;
  query: string;
  category: string;
  engine: string;
  mentioned: boolean;
  recommended: boolean;
  position: number | null;
  trend: "up" | "down" | "flat";
  lastChecked: string;
  status: QueryStatus;
};

export type Competitor = {
  id: string;
  name: string;
  score: number;
  isYou?: boolean;
  sharedQueries: number;
  wins: number;
  lostOpportunities: number;
  reason: string;
};

export type Citation = {
  id: string;
  source: string;
  type: string;
  mentions: number;
  authority: number;
  lastSeen: string;
  impact: "High" | "Medium" | "Low";
};

export type MissingSource = {
  id: string;
  source: string;
  why: string;
  action: string;
};

export type RecommendationPriority = "Critical" | "High Impact" | "Medium Impact" | "Completed";

export type Recommendation = {
  id: string;
  title: string;
  priority: RecommendationPriority;
  why: string;
  impact: "High" | "Medium" | "Low";
  effort: "High" | "Medium" | "Low";
  steps: string[];
};

export type Report = {
  id: string;
  title: string;
  period: string;
  visibilityChange: number;
  winningQueries: string[];
  lostQueries: string[];
  competitorMovement: string;
  citationChanges: string;
  recommendationsCompleted: number;
};
