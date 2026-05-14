export type NavigationItem = {
  label: string;
  href: string;
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
};
