export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export type ServiceFeature = {
  title: string;
  description: string;
  icon: "calendar" | "document" | "route" | "payment";
};

export type DocumentRequirement = {
  title: string;
  description: string;
};

export type NewsArticle = {
  title: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
  excerpt: string;
  image: string;
  secondaryImage?: string;
};
