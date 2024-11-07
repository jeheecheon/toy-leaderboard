import LeaderboardTemplate from "@/components/templates/LeaderboardTemplate/LeaderboardTemplate";
import useRanking from "@/hooks/useRanking";

function LeaderboardPage() {
  const { data, isError, isFetched, isFetching} = useRanking();

  return <LeaderboardTemplate />;
}

export default LeaderboardPage;
