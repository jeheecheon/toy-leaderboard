import TextAtom from "@/components/atoms/TextAtom";
import { Rank, useRankingStore } from "@/stores/ranking";
import RankItemOrganism from "../RankItemOrganism";
import useSortOptions from "@/hooks/useSortOptions";
import InfiniteLoadingMolecule from "@/components/molecules/InfiniteLoadingMolecule";
import RankingSortOptionMolecule from "@/components/molecules/RankingSortOptionsMolecule";

interface CenterSideOrganismProps {
  ranking: Rank[];
  isSuccess: boolean;
  isError: boolean;
}

function CenterSideOrganism(props: CenterSideOrganismProps) {
  const { ranking, isSuccess, isError } = props;
  const { sortBy } = useSortOptions();
  const show = useRankingStore.use.show();

  return (
    <div className="basis-full flex flex-col lg:border-x lg:border-gray-50/30">
      {/* 플레이스홀더! */}
      <div className="w-full lg:pt-[5.5rem]" />

      <div className="lg:overflow-y-auto lg:overflow-x-hidden">
        <div className="text-center mb-5">
          <TextAtom className="text-[2.5rem] lg:text-[6rem]">
            Leaderboard
          </TextAtom>
          <TextAtom color="highlight" className="text-[2.5rem] lg:text-[6rem]">
            .
          </TextAtom>
        </div>

        <RankingSortOptionMolecule className="lg:hidden pb-6 flex flex-col items-end" />

        {isError ? (
          <TextAtom size="large" color="red" className="text-center block">
            Error occurred while fetching data...
          </TextAtom>
        ) : (
          <>
            <div className="space-y-8 flex flex-col items-center">
              {isSuccess &&
                ranking
                  .slice(0, show)
                  .map((rank, index) => (
                    <RankItemOrganism
                      key={rank.player.id}
                      rank={rank}
                      place={index + 1}
                      display={sortBy}
                    />
                  ))}
            </div>

            <InfiniteLoadingMolecule />
          </>
        )}
      </div>
    </div>
  );
}

export default CenterSideOrganism;
