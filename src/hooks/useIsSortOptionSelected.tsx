import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function useIsSortOptionSelected(sortOption: string) {
  const [searchParams] = useSearchParams();
  const currentSortOption = searchParams.get("sort-option");

  return useMemo(() => {
    // 정렬 옵션이 선택되지 않은 경우, "Score" 옵션을 기본으로 선택
    if (currentSortOption === null && sortOption === "score") {
      return true;
    }

    return currentSortOption === sortOption;
  }, [sortOption, currentSortOption]);
}

export default useIsSortOptionSelected;
