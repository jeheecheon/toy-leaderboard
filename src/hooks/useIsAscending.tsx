import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function useIsAscending() {
  const [searchParams] = useSearchParams();

  const sortOrder = searchParams.get("sort-order");

  return useMemo(() => {
    // 지정된 정렬 방향이 없으면 내림차순을 의미하는 false를 반환
    if (sortOrder === undefined) {
        return false;
    }

    return sortOrder === "asc";
  }, [sortOrder]);
}

export default useIsAscending;
