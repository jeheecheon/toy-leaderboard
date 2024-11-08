import { create } from "zustand";
import { RankingStoreState, Rank } from "@/stores/ranking";
import { createSelectors } from "@/utils/zustand";

const useRankingStoreBase = create<RankingStoreState>()((set) => ({
  ranking: [],
  show: 0,
  setRanking(newRanking: Rank[]) {
    set(() => ({ ranking: newRanking }));
  },
  showMore(count: number) {
    set((state) => ({ show: state.show + count }));
  },
}));

const useRankingStore = createSelectors(useRankingStoreBase);

export default useRankingStore;
