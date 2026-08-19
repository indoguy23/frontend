import type { ReviewData } from "@/components/common/Review";

export const REVIEW_DATA: ReviewData[] = [
  {
    id: "REV-001",
    authorName: "Rahul Sharma",
    rating: 5,
    title: "Excellent headphones",
    comment:
      "The sound quality is excellent and the noise cancellation works really well. Battery life is also impressive.",
    date: "12 Aug 2026",
    verifiedPurchase: true,
    helpfulCount: 18,
  },
  {
    id: "REV-002",
    authorName: "Priya Verma",
    rating: 4,
    title: "Very good overall",
    comment:
      "Comfortable for long use and the audio quality is clear. The case could be slightly better.",
    date: "10 Aug 2026",
    verifiedPurchase: true,
    helpfulCount: 9,
  },
];

export const REVIEW_BREAKDOWN = [
  {
    rating: 5,
    count: 180,
  },
  {
    rating: 4,
    count: 70,
  },
  {
    rating: 3,
    count: 20,
  },
  {
    rating: 2,
    count: 8,
  },
  {
    rating: 1,
    count: 6,
  },
];
