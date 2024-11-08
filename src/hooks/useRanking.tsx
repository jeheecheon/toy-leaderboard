import { Rank, RankingStoreState, useRankingStore } from "@/stores/ranking";
import { pinata, PINATA_GET_URLS } from "@/utils/axios";
import { setWinRate, sortRanking } from "@/utils/ranking";
import { useQuery } from "@tanstack/react-query";
import useSortOptions from "./useSortOptions";
import { SortBy, SortOrder } from "@/constants";
import { useEffect } from "react";

function getRanking(
  setRanking: RankingStoreState["setRanking"],
  sortBy: SortBy,
  sortOrder: SortOrder
) {
  return pinata
    .get(PINATA_GET_URLS.USERS)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("랭킹 정보를 불러오는데 실패했습니다.");
      }

      const rankingWithWinRate = response.data.map((rank: Rank) =>
        setWinRate(rank)
      );
      const sortedRanking = sortRanking(rankingWithWinRate, sortBy, sortOrder);
      setRanking(sortedRanking);

      return sortedRanking;
    })
    .catch((error) => console.error(error));
}

function useRanking() {
  const setRanking = useRankingStore.use.setRanking();
  const data = useRankingStore.use.ranking();
  const { sortBy, sortOrder } = useSortOptions();

  const query = useQuery({
    queryKey: ["ranking"],
    queryFn: () => getRanking(setRanking, sortBy, sortOrder),
  });

  useEffect(() => {
    const sortedRanking = sortRanking(data, sortBy, sortOrder);
    setRanking(sortedRanking);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, sortOrder]);

  return { ...query, data };
}

export default useRanking;
