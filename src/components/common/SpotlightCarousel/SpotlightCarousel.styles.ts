export const spotlightCarouselStyles = {
  root: ["relative w-full", "overflow-hidden"].join(" "),

  stage: [
    "relative",
    "h-[420px]",
    "sm:h-[460px]",
    "lg:h-[500px]",
    "[perspective:1400px]",
  ].join(" "),

  spotlight: [
    "pointer-events-none",
    "absolute left-1/2 top-1/2",
    "h-[360px] w-[520px]",
    "-translate-x-1/2 -translate-y-1/2",
    "rounded-full",
    "bg-primary/10",
    "blur-3xl",
  ].join(" "),

  slide: [
    "absolute left-1/2 top-1/2",
    "w-[78%]",
    "max-w-[520px]",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "transition-[transform,opacity,filter]",
    "duration-500 ease-out",
    "[transform-style:preserve-3d]",
    "will-change-transform",
  ].join(" "),

  activeSlide: ["z-30", "opacity-100", "brightness-100"].join(" "),

  adjacentSlide: [
    "z-20",
    "opacity-65",
    "brightness-75",
    "pointer-events-auto",
  ].join(" "),

  outerSlide: [
    "z-10",
    "opacity-25",
    "brightness-50",
    "pointer-events-none",
  ].join(" "),

  hiddenSlide: ["pointer-events-none", "opacity-0"].join(" "),

  controls: [
    "pointer-events-none",
    "absolute inset-x-3",
    "top-1/2 z-40",
    "flex -translate-y-1/2",
    "items-center justify-between",
    "sm:inset-x-6",
  ].join(" "),

  controlButton: ["pointer-events-auto", "shadow-lg backdrop-blur-md"].join(
    " ",
  ),

  footer: ["mt-2 flex flex-col", "items-center justify-center gap-3"].join(" "),

  indicators: ["flex items-center", "justify-center gap-2"].join(" "),

  indicator: [
    "h-2 w-2 rounded-full",
    "bg-muted-foreground/30",
    "transition-all duration-300",
    "hover:bg-muted-foreground/60",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
  ].join(" "),

  activeIndicator: ["w-7 bg-primary"].join(" "),

  counter: [
    "text-xs font-medium",
    "text-muted-foreground",
    "tabular-nums",
  ].join(" "),
};
