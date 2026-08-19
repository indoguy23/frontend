import Avatar from "@/components/ui/Avatar";
import type { AvatarStatus } from "@/components/ui/Avatar";

type UserAvatar = {
  id: number;
  name: string;
  fallback: string;
  status: AvatarStatus;
  src?: string;
};

const USERS: UserAvatar[] = [
  {
    id: 1,
    name: "Aryan Dewangan",
    fallback: "AD",
    status: "online",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    id: 2,
    name: "Priya Sharma",
    fallback: "PS",
    status: "busy",
  },
  {
    id: 3,
    name: "Rahul Verma",
    fallback: "RV",
    status: "away",
  },
  {
    id: 4,
    name: "Neha Singh",
    fallback: "NS",
    status: "offline",
  },
];

const AvatarPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Avatar Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          User and vendor identity components with image fallbacks, sizes and
          presence indicators.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="font-semibold text-card-foreground">Sizes</h3>

          <div className="mt-4 flex flex-wrap items-end gap-5">
            <Avatar alt="Extra small avatar" fallback="XS" size="xs" />

            <Avatar alt="Small avatar" fallback="SM" size="sm" />

            <Avatar alt="Medium avatar" fallback="MD" size="md" />

            <Avatar alt="Large avatar" fallback="LG" size="lg" />

            <Avatar alt="Extra large avatar" fallback="XL" size="xl" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Status Indicators
          </h3>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {USERS.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4"
              >
                <Avatar
                  src={user.src}
                  alt={user.name}
                  fallback={user.fallback}
                  status={user.status}
                />

                <div className="min-w-0">
                  <p className="truncate font-medium text-foreground">
                    {user.name}
                  </p>

                  <p className="mt-1 capitalize text-sm text-muted-foreground">
                    {user.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">Avatar Group</h3>

          <div className="mt-4 flex items-center">
            {USERS.map((user, index) => (
              <Avatar
                key={user.id}
                src={user.src}
                alt={user.name}
                fallback={user.fallback}
                size="lg"
                ring
                className={index === 0 ? "" : "-ml-3"}
              />
            ))}

            <div className="-ml-3 flex h-14 w-14 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground ring-2 ring-background">
              +12
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Broken Image Fallback
          </h3>

          <div className="mt-4 flex items-center gap-3">
            <Avatar
              src="/invalid-avatar.jpg"
              alt="Fallback example"
              fallback="FE"
              size="lg"
            />

            <p className="text-sm text-muted-foreground">
              If the image cannot load, the component displays the provided
              initials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarPlayground;
