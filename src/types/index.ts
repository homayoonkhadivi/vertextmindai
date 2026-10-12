export interface CaseStudy {
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  demoUrl?: string;
}

export interface NarrativeSection {
  title: string;
  body: string;
}

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  narrative: NarrativeSection[];
  caseStudies: CaseStudy[];
}
