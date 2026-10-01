import { useSearchParams } from "react-router-dom";

// The active category from the URL (?category=<c>). Unknown or missing values fall back to "all".
export const useCategoryParam = <T extends string>(
  categories: readonly T[],
): T | "all" => {
  const [params] = useSearchParams();
  const raw = params.get("category");
  return categories.find((c) => c === raw) ?? "all";
};
