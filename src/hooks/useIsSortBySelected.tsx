import { SearchParamKeys } from "@/constants";
import { SortBy } from "@/constants";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function useIsSortBySelected(sortBy: string) {
  const [searchParams] = useSearchParams();
  const currentSortby = searchParams.get(SearchParamKeys.SortBy);

  return useMemo(() => {
    // 정렬 옵션이 선택되지 않은 경우, "Score" 옵션을 기본으로 선택
    if (currentSortby === null && sortBy === SortBy.Score) {
      return true;
    }

    return currentSortby === sortBy;
  }, [sortBy, currentSortby]);
}

export default useIsSortBySelected;
