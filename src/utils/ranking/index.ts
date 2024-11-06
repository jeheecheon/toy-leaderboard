import { Rank } from "@/stores/ranking";

export const computeWinRate = (rank: Rank): number => {
  const { wins, losses } = rank;
  const totalGames = wins + losses;
  return totalGames === 0
    ? 0
    : parseFloat(((wins / totalGames) * 100).toFixed(2));
};
