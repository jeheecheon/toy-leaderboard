import TextAtom from "@/components/atoms/TextAtom";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useSortOptions from "@/hooks/useSortOptions";
import { useRankingStore } from "@/stores/ranking";

function InfiniteLoadingMolecule() {
  const showMore = useRankingStore.use.showMore();
  const { showBy } = useSortOptions();
  const loadingRef = useInfiniteScroll(() => showMore(Number(showBy)), 3000);

  return (
    <div ref={loadingRef} className="flex flex-col items-center gap-2 py-12">
      <div className="w-10 h-10 border-4 border-t-4 border-t-highlight border-dark-gray rounded-full animate-spin" />
      <TextAtom color="gray" size="small">
        Loading...
      </TextAtom>
    </div>
  );
}

export default InfiniteLoadingMolecule;
