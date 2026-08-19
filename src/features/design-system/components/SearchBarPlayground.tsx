import { useCallback, useState } from "react";

import Card from "@/components/ui/Card";
import SearchBar from "@/components/common/SearchBar";

const SearchBarPlayground = () => {
  const [basicSearch, setBasicSearch] = useState("");

  const [productSearch, setProductSearch] = useState("");

  const [lastSearch, setLastSearch] = useState("");

  const handleDebouncedSearch = useCallback((value: string) => {
    setLastSearch(value);
  }, []);

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          SearchBar Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable search controls with clear, loading and debounced search
          behavior.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-foreground">Basic Search</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Controlled search with clear functionality.
          </p>

          <SearchBar
            className="mt-5"
            value={basicSearch}
            onChange={setBasicSearch}
            placeholder="Search marketplace..."
          />

          <p className="mt-3 text-sm text-muted-foreground">
            Current value:{" "}
            <strong className="text-foreground">
              {basicSearch || "Empty"}
            </strong>
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">
            Debounced Product Search
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Search executes 500ms after typing stops.
          </p>

          <SearchBar
            className="mt-5"
            value={productSearch}
            onChange={setProductSearch}
            onSearch={handleDebouncedSearch}
            debounceMs={500}
            placeholder="Search products..."
          />

          <p className="mt-3 text-sm text-muted-foreground">
            Debounced value:{" "}
            <strong className="text-foreground">{lastSearch || "Empty"}</strong>
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Filled Variant</h3>

          <SearchBar
            className="mt-5"
            value=""
            onChange={() => {}}
            variant="filled"
            placeholder="Search vendors..."
          />
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Loading State</h3>

          <SearchBar
            className="mt-5"
            value="wireless headphones"
            onChange={() => {}}
            loading
            placeholder="Search products..."
          />
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Large Search</h3>

          <SearchBar
            className="mt-5"
            value=""
            onChange={() => {}}
            size="lg"
            placeholder="What are you looking for?"
          />
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Disabled Search</h3>

          <SearchBar
            className="mt-5"
            value=""
            onChange={() => {}}
            disabled
            placeholder="Search unavailable"
          />
        </Card>
      </div>
    </section>
  );
};

export default SearchBarPlayground;
