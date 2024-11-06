import { create } from "zustand";
import {
  StoreState,
  SortDirection,
  SortOptions,
  Rank,
} from "@/stores/ranking/types";
import { createSelectors } from "@/utils/zustand";

const useRankingStoreBase = create<StoreState>()((set, get) => ({
  ranking: [],
  sortedBy: "score",
  sortDirection: SortDirection.Descending,

  setRanking(newRanking: Rank[]) {
    set(() => ({ ranking: newRanking }));
  },

  sortRanking(sortBy: SortOptions, direction: SortDirection) {
    const { ranking } = get();

    const sortedRanking = [...ranking].sort((a, b) => {
      const diff = a[sortBy] - b[sortBy];
      return direction === SortDirection.Ascending ? diff : -diff;
    });

    set(() => ({
      ranking: sortedRanking,
      sortedBy: sortBy,
      sortDirection: direction,
    }));
  },
}));

const useRankingStore = createSelectors(useRankingStoreBase);

export default useRankingStore;
