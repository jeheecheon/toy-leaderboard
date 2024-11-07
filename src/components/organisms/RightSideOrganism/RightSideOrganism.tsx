import SortOptionMolecule from "@/components/molecules/SortOptionMolecule";
import { SortOptions } from "@/stores/ranking";

function RightSideOrganism() {
  return (
    <ul className="w-80 flex flex-col items-end justify-center">
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
  );
}

export default RightSideOrganism;
