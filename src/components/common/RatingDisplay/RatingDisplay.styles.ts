export const ratingDisplayStyles = {
  root: ["flex flex-wrap items-center gap-2"].join(" "),

  stars: ["flex items-center"].join(" "),

  starSm: "h-3.5 w-3.5",

  starMd: "h-4 w-4",

  starLg: "h-5 w-5",

  activeStar: ["fill-current", "text-warning"].join(" "),

  inactiveStar: ["text-muted-foreground/30"].join(" "),

  value: ["font-medium", "text-foreground"].join(" "),

  reviews: ["text-muted-foreground"].join(" "),

  textSm: "text-xs",

  textMd: "text-sm",

  textLg: "text-base",
};
