type Guild = {
  name: string;
};

export type Player = {
  id: number;
  name: string;
  guild?: Guild;
};

export type Rank = {
  score: number;
  wins: number;
  losses: number;
  winRate: number;
  player: Player;
};

export type SortOptions = keyof Omit<Rank, "player">;

export enum SortDirection {
  Ascending,
  Descending,
}

export type StoreState = {
  ranking: Rank[];
  sortedBy: SortOptions;
  sortDirection: SortDirection;
};
