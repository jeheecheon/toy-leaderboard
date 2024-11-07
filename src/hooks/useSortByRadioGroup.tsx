import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function useSortByRadioGroup(radioButonTitles: string[]) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRadioIndex, setSelectedRadioIndex] = useState(() => {
    const sortBy = searchParams.get("show-by");
    if (sortBy === null) return 0;

    const index = radioButonTitles.indexOf(sortBy);
    if (index !== -1) {
      return index;
    }

    return 0;
  });

  const handleSelectRadio = (index: number) => {
    setSelectedRadioIndex(index);

    const sortOption = searchParams.get("sort-option") ?? "score";
    const sortOrder = searchParams.get("sort-order") ?? "desc";

    setSearchParams({
      "sort-option": sortOption,
      "sort-order": sortOrder,
      "show-by": radioButonTitles[index],
    });
  };

  return {
    radioButonTitles,
    selectedRadioIndex,
    handleSelectRadio,
  };
}

export default useSortByRadioGroup;
