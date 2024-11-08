import { useMemo } from "react";
import useSortOptions from "@/hooks/useSortOptions";
import { SortOrder } from "@/constants";

function useIsAscending() {
  const { sortOrder } = useSortOptions();

  return useMemo(() => {
    // 지정된 정렬 방향이 없으면 내림차순을 의미하는 false를 반환
    if (sortOrder === undefined) {
        return false;
    }

    return sortOrder === SortOrder.ASCENDING;
  }, [sortOrder]);
}

export default useIsAscending;
