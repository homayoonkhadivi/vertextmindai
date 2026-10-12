export interface CaseStudy {
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  demoUrl?: string;
}

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  caseStudies: CaseStudy[];
}
