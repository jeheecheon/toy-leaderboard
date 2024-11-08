import TextAtom from "@/components/atoms/TextAtom";
import { SearchParamKeys } from "@/constants";
import { SortBy } from "@/constants";
import useIsSortBySelected from "@/hooks/useIsSortBySelected";
import { useSearchParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface SortByMoleculeProps {
  sortBy: SortBy;
  title: string;
}

function SortByMolecule(props: SortByMoleculeProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sortBy, title } = props;

  const isSortBySelected = useIsSortBySelected(sortBy);

  function handleClick() {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(SearchParamKeys.SortBy, sortBy);
    setSearchParams(newSearchParams);
  }

  return (
    <div
      className="inline-flex items-center gap-3 cursor-pointer lg:h-[5.625rem]"
      onClick={handleClick}
    >
      <TextAtom
        color={isSortBySelected ? "highlight" : "gray"}
        className={twMerge(
          "hover:text-highlight text-xl",
          isSortBySelected ? "lg:text-[2.5rem]" : "lg:text-[2.1875rem]"
        )}
      >
        {title}
      </TextAtom>
      <TextAtom
        color="highlight"
        className={isSortBySelected ? "hidden lg:inline" : "hidden"}
      >
        0x&
      </TextAtom>
    </div>
  );
}

export default SortByMolecule;
