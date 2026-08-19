import ThemeToggle from "@/components/common/ThemeToggle";

const DesignSystemHeader = () => {
  return (
    <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
          {" "}
          Internal UI Playground
        </p>

        <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
          MarketHub Design System
        </h1>

        <p className="mt-2 max-w-2xl text-muted-foreground">
          A development playground for testing reusable, responsive and
          theme-aware UI components.
        </p>
      </div>

      <div className="self-start sm:self-auto">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default DesignSystemHeader;
