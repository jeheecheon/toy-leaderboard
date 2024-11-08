import TextAtom from "@/components/atoms/TextAtom";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useSortOptions from "@/hooks/useSortOptions";
import { useRankingStore } from "@/stores/ranking";

function InfiniteLoadingMolecule() {
  const showMore = useRankingStore.use.showMore();
  const { showBy } = useSortOptions();
  const loadingRef = useInfiniteScroll(() => showMore(Number(showBy)), 3000);

  return (
    <div ref={loadingRef} className="flex flex-col items-center gap-2 pb-4">
      <div className="w-10 h-10 border-4 border-t-4 border-t-highlight border-dark-gray rounded-full animate-spin mt-12" />
      <TextAtom color="gray" size="small">
        Loading...
      </TextAtom>
    </div>
  );
}

export default InfiniteLoadingMolecule;
