export const spotlightCarouselStyles = {
  root: ["relative w-full", "overflow-hidden", "outline-none"].join(" "),

  stage: [
    "relative",
    "h-[440px]",
    "sm:h-[500px]",
    "lg:h-[560px]",
    "[perspective:1600px]",
  ].join(" "),

  spotlight: [
    "pointer-events-none",
    "absolute left-1/2 top-1/2",
    "h-[320px] w-[70%]",
    "max-w-[700px]",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "rounded-full",
    "bg-primary/10",
    "blur-[90px]",
  ].join(" "),

  slide: [
    "absolute left-1/2 top-1/2",
    "w-[78vw]",
    "max-w-[520px]",
    "overflow-hidden",
    "rounded-3xl",
    "transition-[transform,opacity,filter]",
    "duration-500",
    "ease-[cubic-bezier(0.22,1,0.36,1)]",
    "[transform-style:preserve-3d]",
    "will-change-transform",
    "sm:w-[62vw]",
    "lg:w-[500px]",
  ].join(" "),

  activeSlide: ["z-30", "opacity-100", "brightness-100", "shadow-2xl"].join(
    " ",
  ),

  adjacentSlide: [
    "z-20",
    "cursor-pointer",
    "opacity-60",
    "brightness-75",
    "blur-[0.2px]",
  ].join(" "),

  outerSlide: [
    "z-10",
    "cursor-pointer",
    "opacity-25",
    "brightness-50",
    "blur-[0.5px]",
  ].join(" "),

  hiddenSlide: ["pointer-events-none", "opacity-0"].join(" "),

  controls: [
    "pointer-events-none",
    "absolute inset-x-2",
    "top-1/2 z-40",
    "flex -translate-y-1/2",
    "items-center justify-between",
    "sm:inset-x-5",
  ].join(" "),

  controlButton: [
    "pointer-events-auto",
    "rounded-full",
    "bg-background/80",
    "shadow-xl",
    "backdrop-blur-xl",
  ].join(" "),

  footer: ["mt-3 flex flex-col", "items-center justify-center gap-3"].join(" "),

  indicators: ["flex items-center", "justify-center gap-2"].join(" "),

  indicator: [
    "h-2 w-2",
    "rounded-full",
    "bg-muted-foreground/30",
    "transition-all duration-300",
    "hover:bg-muted-foreground/60",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
  ].join(" "),

  activeIndicator: ["w-7", "bg-primary"].join(" "),

  counter: [
    "text-xs font-medium",
    "text-muted-foreground",
    "tabular-nums",
  ].join(" "),
};
