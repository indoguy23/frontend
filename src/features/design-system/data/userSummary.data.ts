import type { UserSummaryData } from "@/components/common/UserSummary";

export const USER_SUMMARY_DATA: UserSummaryData[] = [
  {
    id: "user-1",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 98765 43210",
    role: "Customer",
    status: "active",
    description: "Regular marketplace customer with multiple completed orders.",
  },
  {
    id: "user-2",
    name: "Priya Verma",
    email: "priya@example.com",
    role: "Seller",
    status: "pending",
    description:
      "Seller account currently undergoing marketplace verification.",
  },
  {
    id: "user-3",
    name: "TechNova Store",
    email: "support@technova.example",
    role: "Vendor",
    status: "active",
    description: "Verified electronics marketplace seller.",
  },
];
