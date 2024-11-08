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

function sortRanking(ranking: Rank[], sortBy: SortBy, direction: SortOrder) {
  const sortedRanking = [...ranking].sort((a, b) => {
    // 우선적으로 sortBy 기준으로 비교
    const primaryDiff = a[sortBy] - b[sortBy];
    if (primaryDiff !== 0) {
      return direction === SortOrder.ASCENDING ? primaryDiff : -primaryDiff;
    }

    // 정렬 우선 순위 기준 (score > wins > losses > winRate)
    const scoreDiff = a.score - b.score;
    if (scoreDiff !== 0) return scoreDiff;

    const winsDiff = a.wins - b.wins;
    if (winsDiff !== 0) return winsDiff;

    const lossesDiff = a.losses - b.losses;
    if (lossesDiff !== 0) return lossesDiff;

    const winRateDiff = a.winRate - b.winRate;
    return winRateDiff;
  });

  return sortedRanking;
}

function getOrdinalSuffix(num: number): string {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return `${num}th`;

  switch (lastDigit) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

export { setWinRate, computeWinRate, sortRanking, getOrdinalSuffix };
