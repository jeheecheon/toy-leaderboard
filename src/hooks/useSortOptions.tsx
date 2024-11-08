import { SearchParamKeys } from "@/constants";
import { SortBy, SortOrder } from "@/constants";
import { useSearchParams } from "react-router-dom";

function useSortOptions() {
  const [searchParams] = useSearchParams();

  const sortBy = (searchParams.get(SearchParamKeys.SortBy) ??
    SortBy.Score) as SortBy;
  const sortOrder = (searchParams.get(SearchParamKeys.SortOrder) ??
    SortOrder.DESCENDING) as SortOrder;
  const showBy = (searchParams.get(SearchParamKeys.ShowBy) ?? "10") as string;

  return { sortBy, sortOrder, showBy };
}

export default useSortOptions;
