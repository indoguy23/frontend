import type { StatusBadgeStatus } from "@/components/common/StatusBadge";

export interface UserSummaryData {
  id: string;

  name: string;

  email?: string;

  phone?: string;

  avatar?: string;

  role?: string;

  status?: StatusBadgeStatus;

  description?: string;
}

export interface UserSummaryProps {
  user: UserSummaryData;

  compact?: boolean;

  onClick?: (user: UserSummaryData) => void;

  className?: string;
}
