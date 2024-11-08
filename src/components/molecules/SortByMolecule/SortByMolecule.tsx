import TextAtom from "@/components/atoms/TextAtom";
import { SearchParamKeys } from "@/constants";
import { SortBy } from "@/constants";
import useIsSortBySelected from "@/hooks/useIsSortBySelected";
import { useSearchParams } from "react-router-dom";

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
      className="inline-flex items-center gap-3 cursor-pointer leading-[5.625rem]"
      onClick={handleClick}
    >
      <TextAtom
        size={isSortBySelected ? "5xlarge" : "4xlarge"}
        color={isSortBySelected ? "highlight" : "gray"}
        className="hover:text-highlight"
      >
        {title}
      </TextAtom>
      <TextAtom color="highlight" className={isSortBySelected ? "" : "hidden"}>
        0x&
      </TextAtom>
    </div>
  );
}

export default SortByMolecule;
