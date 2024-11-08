import TextAtom from "@/components/atoms/TextAtom";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useSortOptions from "@/hooks/useSortOptions";
import { useRankingStore } from "@/stores/ranking";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

function InfiniteLoadingMolecule() {
  const showMore = useRankingStore.use.showMore();
  const ranking = useRankingStore.use.ranking();
  const show = useRankingStore.use.show();

  const { showBy } = useSortOptions();
  const canLoadMore = useMemo(() => show < ranking.length, [ranking, show]);

  const loadingRef = useInfiniteScroll(() => {
    if (canLoadMore) {
      showMore(Number(showBy));
    }
  }, 3000);

  return (
    <div
      ref={loadingRef}
      className={twMerge("flex-col items-center gap-2 pt-12 pb-7", canLoadMore ? "flex" : "hidden")}
    >
      <div className="w-10 h-10 border-4 border-t-4 border-t-highlight border-dark-gray rounded-full animate-spin" />
      <TextAtom color="gray" size="small">
        Loading...
      </TextAtom>
    </div>
  );
}

export default InfiniteLoadingMolecule;
