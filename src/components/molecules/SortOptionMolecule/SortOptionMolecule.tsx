import TextAtom from "@/components/atoms/TextAtom";
import useIsSortOptionSelected from "@/hooks/useIsSortOptionSelected";
import { SortOptions } from "@/stores/ranking";
import { useSearchParams } from "react-router-dom";

interface SortOptionMoleculeProps {
  sortOption: SortOptions;
  title: string;
}

function SortOptionMolecule(props: SortOptionMoleculeProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sortOption, title } = props;

  const isSortOptionSelected = useIsSortOptionSelected(sortOption);

  function handleClick() {
    const sortOrder = searchParams.get("sort-order") ?? "desc";

    setSearchParams({ "sort-order": sortOrder, "sort-option": sortOption });
  }

  return (
    <div
      className="inline-flex items-center gap-3 cursor-pointer leading-[5.625rem]"
      onClick={handleClick}
    >
      <TextAtom
        alignment="right"
        size={isSortOptionSelected ? "5xlarge" : "4xlarge"}
        color={isSortOptionSelected ? "highlight" : "gray"}
      >
        {title}
      </TextAtom>
      <TextAtom
        color="highlight"
        className={isSortOptionSelected ? "" : "hidden"}
      >
        0x&
      </TextAtom>
    </div>
  );
}

export default SortOptionMolecule;
