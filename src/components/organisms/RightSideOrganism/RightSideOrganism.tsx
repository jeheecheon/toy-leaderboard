import SortOptionMolecule from "@/components/molecules/SortOptionMolecule";
import ToggleWithTitleMolecule from "@/components/molecules/ToggleWithTitleMolecule";
import useIsAscending from "@/hooks/useIsAscending";
import useToggleSortOrder from "@/hooks/useToggleSortOrder";
import { SortOptions } from "@/stores/ranking";

function RightSideOrganism() {
  const isAscending = useIsAscending();
  const { toggleSortOrder } = useToggleSortOrder();

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
