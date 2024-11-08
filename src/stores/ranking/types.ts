type Guild = {
  name: string;
};

type Player = {
  id: number;
  name: string;
  guild?: Guild;
};

type Rank = {
  score: number;
  wins: number;
  losses: number;
  winRate: number;
  player: Player;
};

type RankingStoreState = {
  ranking: Rank[];
  setRanking: (newRanking: Rank[]) => void;
};

export type { Player, Rank, RankingStoreState };
