import Timeline from "@/components/common/Timeline";
import Card from "@/components/ui/Card";

import {
  ACTIVITY_TIMELINE_DATA,
  VERIFICATION_TIMELINE_DATA,
} from "../data/timeline.data";

const TimelinePlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Timeline
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable timeline for activity history, verification, payments and
          marketplace events.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-foreground">Order Activity</h3>

          <div className="mt-6">
            <Timeline items={ACTIVITY_TIMELINE_DATA} />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Seller Verification</h3>

          <div className="mt-6">
            <Timeline items={VERIFICATION_TIMELINE_DATA} />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TimelinePlayground;
