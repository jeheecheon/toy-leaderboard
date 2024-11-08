import RadioGroupMolecule from "@/components/molecules/RadioGroupMolecule";
import SortByMolecule from "@/components/molecules/SortByMolecule";
import ToggleWithTitleMolecule from "@/components/molecules/ToggleWithTitleMolecule";
import { SortBy } from "@/constants";
import useIsAscending from "@/hooks/useIsAscending";
import useShowByRadioGroup from "@/hooks/useShowByRadioGroup";
import useToggleSortOrder from "@/hooks/useToggleSortOrder";

interface RankingSortOptionMoleculeProps {
  className?: string;
}

function RankingSortOptionMolecule(props: RankingSortOptionMoleculeProps) {
  const { className } = props;

  const isAscending = useIsAscending();
  const { toggleSortOrder } = useToggleSortOrder();
  const { handleSelectRadio, radioButonTitles, selectedRadioIndex } =
    useShowByRadioGroup(["10", "15", "20"]);

  return (
    <div className={className}>
      <ul className="flex flex-col lg:items-end justify-center gap-y-3 lg:gap-y-0">
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
        className="lg:order-1 order-2"
      />

      <ToggleWithTitleMolecule
        isOn={isAscending}
        onClick={toggleSortOrder}
        titleWhenOff="Descending"
        titleWhenOn="Ascending"
        className="ml-auto lg:mx-0 mr-4 order-1 lg:order-2"
      />
    </div>
  );
}

export default RankingSortOptionMolecule;
