import RadioGroupMolecule from "@/components/molecules/RadioGroupMolecule";
import SortByMolecule from "@/components/molecules/SortByMolecule";
import ToggleWithTitleMolecule from "@/components/molecules/ToggleWithTitleMolecule";
import { SortBy } from "@/constants";
import useIsAscending from "@/hooks/useIsAscending";
import useShowByRadioGroup from "@/hooks/useShowByRadioGroup";
import useToggleSortOrder from "@/hooks/useToggleSortOrder";

function RightSideOrganism() {
  const isAscending = useIsAscending();
  const { toggleSortOrder } = useToggleSortOrder();
  const { handleSelectRadio, radioButonTitles, selectedRadioIndex } =
    useShowByRadioGroup(["10", "15", "20"]);

  return (
    <div className="max-w-80 w-full hidden lg:flex flex-col items-end justify-center ">
      <ul className="flex flex-col items-end justify-center">
        {[
          { sortBy: SortBy.Score, title: "score" },
          { sortBy: SortBy.Wins, title: "wins" },
          { sortBy: SortBy.Losses, title: "losses" },
          { sortBy: SortBy.WinRate, title: "win rate" },
        ].map(({ sortBy, title }) => (
          <li key={title}>
            <SortByMolecule sortBy={sortBy} title={title} />
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
