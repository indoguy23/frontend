import RatingDisplay from "@/components/common/RatingDisplay";
import Card from "@/components/ui/Card";

const RatingDisplayPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Rating Display
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable rating presentation for products, sellers and reviews.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card>
          <p className="mb-4 text-sm text-muted-foreground">Product Rating</p>

          <RatingDisplay rating={4.7} reviewCount={284} />
        </Card>

        <Card>
          <p className="mb-4 text-sm text-muted-foreground">Small</p>

          <RatingDisplay rating={4.2} reviewCount={83} size="sm" />
        </Card>

        <Card>
          <p className="mb-4 text-sm text-muted-foreground">Without Reviews</p>

          <RatingDisplay rating={3.8} showReviewCount={false} />
        </Card>

        <Card>
          <p className="mb-4 text-sm text-muted-foreground">Stars Only</p>

          <RatingDisplay
            rating={5}
            showValue={false}
            showReviewCount={false}
            size="lg"
          />
        </Card>
      </div>
    </section>
  );
};

export default RatingDisplayPlayground;
