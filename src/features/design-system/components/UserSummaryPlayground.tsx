import UserSummary from "@/components/common/UserSummary";
import { showToast } from "@/components/ui/Toast";

import { USER_SUMMARY_DATA } from "../data/userSummary.data";

const UserSummaryPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          User Summary
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable customer, seller and account summary presentation.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {USER_SUMMARY_DATA.map((user) => (
          <UserSummary
            key={user.id}
            user={user}
            onClick={(selectedUser) =>
              showToast.info(`Opening ${selectedUser.name}.`)
            }
          />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-foreground">Compact</h3>

        <div className="mt-4 max-w-xl space-y-3">
          {USER_SUMMARY_DATA.map((user) => (
            <UserSummary key={user.id} user={user} compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserSummaryPlayground;
