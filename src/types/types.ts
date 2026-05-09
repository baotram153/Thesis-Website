export type Author = {
  role?: string;
  name: string;
  url?: string;
  institution?: string;
  notes?: string[];
};

export type Link = {
  url: string;
  name: string;
  icon?: string;
};

export type Note = {
  symbol: string;
  text: string;
};
