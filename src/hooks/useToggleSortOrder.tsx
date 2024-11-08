import { useSearchParams } from "react-router-dom";
import useSortOptions from "./useSortOptions";
import { SortOrder } from "@/constants";
import { SearchParamKeys } from "@/constants";

function useToggleSortOrder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);
  const { sortOrder } = useSortOptions();

  newSearchParams.set(
    SearchParamKeys.SortOrder,
    sortOrder === SortOrder.ASCENDING
      ? SortOrder.DESCENDING
      : SortOrder.ASCENDING
  );

  return {
    toggleSortOrder() {
      setSearchParams(newSearchParams);
    },
  };
}

export default useToggleSortOrder;
