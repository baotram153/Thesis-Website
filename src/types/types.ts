export type Author = {
  role?: string;
  name: string;
  url?: string;
  institution?: string;
  affiliation?: string[];
  location?: string;
  orcid?: string;
  notes?: string[];
};

export type ResultsColumn = {
  /** Key used to look the value up in each row. */
  key: string;
  label: string;
  /** Spanning header this column sits under (e.g. "Closed-loop Metric"). */
  group?: string;
  /** "up" = higher is better, "down" = lower is better. Also enables ranking. */
  arrow?: "up" | "down";
  align?: "left" | "right";
  /** Draw a vertical rule to the left of this column, like `|` in LaTeX. */
  rule?: boolean;
};

export type ResultsRow = {
  /** Used to address this row's `method-<id>` slot. */
  id: string;
  /** Draw a horizontal rule above this row, like `\midrule`. */
  separatorBefore?: boolean;
  /** Bold the row label (our method). */
  emphasize?: boolean;
  /** Keep this row's numbers out of the best/2nd/3rd ranking. */
  excludeFromRanking?: boolean;
  [key: string]: string | number | boolean | undefined;
};

export type Link = {
  url: string;
  name: string;
  icon?: string;
  fromPublic?: boolean;
};

export type Note = {
  symbol: string;
  text: string;
};
