import Avatar from "@/components/ui/Avatar";
import StatusBadge from "@/components/common/StatusBadge";
import { cn } from "@/utils/cn";

import { userSummaryStyles } from "./UserSummary.styles";
import type { UserSummaryProps } from "./UserSummary.types";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const UserSummary = ({
  user,
  compact = false,
  onClick,
  className,
}: UserSummaryProps) => {
  return (
    <article
      className={cn(
        userSummaryStyles.root,
        onClick && userSummaryStyles.clickable,
        compact && userSummaryStyles.compact,
        className,
      )}
      onClick={() => onClick?.(user)}
    >
      <Avatar
        src={user.avatar}
        alt={user.name}
        fallback={getInitials(user.name)}
        size={compact ? "sm" : "md"}
      />

      <div className={userSummaryStyles.content}>
        <div className={userSummaryStyles.nameRow}>
          <h3 className={userSummaryStyles.name}>{user.name}</h3>

          {user.role && (
            <span className={userSummaryStyles.role}>{user.role}</span>
          )}

          {user.status && <StatusBadge status={user.status} showDot />}
        </div>

        {user.email && <p className={userSummaryStyles.email}>{user.email}</p>}

        {user.phone && <p className={userSummaryStyles.phone}>{user.phone}</p>}

        {!compact && user.description && (
          <p className={userSummaryStyles.description}>{user.description}</p>
        )}
      </div>
    </article>
  );
};

export default UserSummary;
