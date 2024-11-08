import { SortBy, SortOrder } from "@/constants";
import { Rank } from "@/stores/ranking";

function computeWinRate(rank: Rank): number {
  const { wins, losses } = rank;
  const totalGames = wins + losses;
  return totalGames === 0
    ? 0
    : parseFloat(((wins / totalGames) * 100).toFixed(2));
}

function setWinRate(rank: Rank): Rank {
  rank.winRate = computeWinRate(rank);
  return rank;
}

function sortRanking(
  ranking: Rank[],
  sortBy: SortBy,
  direction: SortOrder
) {
  const sortedRanking = [...ranking].sort((a, b) => {
    const diff = a[sortBy] - b[sortBy];
    return direction === SortOrder.ASCENDING ? diff : -diff;
  });

  return sortedRanking;
}

export { setWinRate, computeWinRate, sortRanking };
