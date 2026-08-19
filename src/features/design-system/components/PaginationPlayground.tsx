import { useState } from "react";

import Card from "@/components/ui/Card";
import Pagination from "@/components/common/Pagination";

const PaginationPlayground = () => {
  const [basicPage, setBasicPage] = useState(1);

  const [largePage, setLargePage] = useState(10);

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Pagination Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Responsive pagination for products, orders, vendors and other
          paginated data.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <Card>
          <h3 className="font-semibold text-foreground">Basic Pagination</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Current page: {basicPage}
          </p>

          <div className="mt-6">
            <Pagination
              currentPage={basicPage}
              totalPages={5}
              onPageChange={setBasicPage}
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Large Result Set</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Demonstrates automatic ellipsis handling.
          </p>

          <div className="mt-6">
            <Pagination
              currentPage={largePage}
              totalPages={25}
              siblingCount={1}
              onPageChange={setLargePage}
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">
            Without First / Last
          </h3>

          <div className="mt-6">
            <Pagination
              currentPage={3}
              totalPages={10}
              showFirstLast={false}
              onPageChange={() => {}}
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Disabled Pagination</h3>

          <div className="mt-6">
            <Pagination
              currentPage={4}
              totalPages={12}
              disabled
              onPageChange={() => {}}
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PaginationPlayground;
