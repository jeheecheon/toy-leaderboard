import { pinata, PINATA_GET_URLS } from "@/utils/axios";
import { useEffect } from "react";

function LeaderboardPage() {
  useEffect(() => {
    pinata.get(PINATA_GET_URLS.USERS).then(({ data }) => console.log(data));
  }, []);

  return <div></div>;
}

export default LeaderboardPage;
