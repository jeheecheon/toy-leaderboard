import TextAtom from "@/components/atoms/TextAtom";
import { Rank } from "@/stores/ranking";
import RankItemOrganism from "../RankItemOrganism";
import useSortOptions from "@/hooks/useSortOptions";

interface CenterSideOrganismProps {
  ranking: Rank[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

function CenterSideOrganism(props: CenterSideOrganismProps) {
  const { ranking, isLoading, isSuccess, isError } = props;
  const { sortBy } = useSortOptions();

  return (
    <div className="basis-full flex flex-col lg:border-x lg:border-gray-50/30 ">
      {/* 플레이스홀더! */}
      <div className="w-full pt-[5.5rem]" />

      <div className="overflow-y-auto">
        <div className="text-center">
          <TextAtom size="6xlarge">Leaderboard</TextAtom>
          <TextAtom color="highlight" size="6xlarge">
            .
          </TextAtom>
        </div>

        <div className="space-y-8 flex flex-col items-center">
          {isSuccess &&
            ranking.map((rank, index) => (
              <RankItemOrganism
                key={rank.player.id}
                rank={rank}
                place={index + 1}
                display={sortBy}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CenterSideOrganism;
