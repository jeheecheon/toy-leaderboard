import { pinata, PINATA_GET_URLS } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

async function getRankingAsync() {
  return await pinata.get(PINATA_GET_URLS.USERS).then((response) => {
    if (response.status !== 200) {
      throw new Error("랭킹 정보를 불러오는데 실패했습니다.");
    }

    return response.data;
  });
}

function useRanking() {
  return useQuery({ queryKey: ["ranking"], queryFn: getRankingAsync });
}

export default useRanking;
