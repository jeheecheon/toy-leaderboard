import { SearchParamKeys } from "@/constants";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function useShowByRadioGroup(radioButonTitles: string[]) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRadioIndex, setSelectedRadioIndex] = useState(() => {
    const sortBy = searchParams.get(SearchParamKeys.ShowBy);
    if (sortBy === null) return 0;

    const index = radioButonTitles.indexOf(sortBy);
    if (index !== -1) {
      return index;
    }

    return 0;
  });

  const handleSelectRadio = (index: number) => {
    setSelectedRadioIndex(index);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(SearchParamKeys.ShowBy, radioButonTitles[index]);

    setSearchParams(newSearchParams);
  };

  return {
    radioButonTitles,
    selectedRadioIndex,
    handleSelectRadio,
  };
}

export default useShowByRadioGroup;
