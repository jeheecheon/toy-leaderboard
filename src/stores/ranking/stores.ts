import { create } from "zustand";
import { RankingStoreState, Rank } from "@/stores/ranking";
import { createSelectors } from "@/utils/zustand";

const useRankingStoreBase = create<RankingStoreState>()((set) => ({
  ranking: [],

  setRanking(newRanking: Rank[]) {
    set(() => ({ ranking: newRanking }));
  },
}));

const useRankingStore = createSelectors(useRankingStoreBase);

export default useRankingStore;
