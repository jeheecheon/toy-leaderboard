import { useSearchParams } from "react-router-dom";

function useToggleSortOrder() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortOption = searchParams.get("sort-option") ?? "score";
  const sortOrder = searchParams.get("sort-order") === "asc" ? "desc" : "asc";

  return {
    toggleSortOrder() {
      setSearchParams({ "sort-option": sortOption, "sort-order": sortOrder });
    },
  };
}

export default useToggleSortOrder;
