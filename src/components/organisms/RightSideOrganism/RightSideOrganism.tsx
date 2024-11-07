import RadioGroupMolecule from "@/components/molecules/RadioGroupMolecule";
import SortOptionMolecule from "@/components/molecules/SortOptionMolecule";
import ToggleWithTitleMolecule from "@/components/molecules/ToggleWithTitleMolecule";
import useIsAscending from "@/hooks/useIsAscending";
import useSortByRadioGroup from "@/hooks/useSortByRadioGroup";
import useToggleSortOrder from "@/hooks/useToggleSortOrder";
import { SortOptions } from "@/stores/ranking";

function RightSideOrganism() {
  const isAscending = useIsAscending();
  const { toggleSortOrder } = useToggleSortOrder();
  const { handleSelectRadio, radioButonTitles, selectedRadioIndex } =
    useSortByRadioGroup(["10", "15", "20"]);

  return (
    <div className="w-80 flex flex-col items-end justify-center shrink-0">
      <ul className="flex flex-col items-end justify-center">
        {[
          { sortOption: "score", title: "score" },
          { sortOption: "wins", title: "wins" },
          { sortOption: "losses", title: "losses" },
          { sortOption: "winRate", title: "win rate" },
        ].map(({ sortOption, title }) => (
          <li key={sortOption}>
            <SortOptionMolecule
              sortOption={sortOption as SortOptions}
              title={title}
            />
          </li>
        ))}
      </ul>

      <RadioGroupMolecule
        radioButtonTitles={radioButonTitles}
        selectedIndex={selectedRadioIndex}
        onClick={handleSelectRadio}
      />

      <ToggleWithTitleMolecule
        isOn={isAscending}
        onClick={toggleSortOrder}
        titleWhenOff="Descending"
        titleWhenOn="Ascending"
      />
    </div>
  );
}

export default RightSideOrganism;
