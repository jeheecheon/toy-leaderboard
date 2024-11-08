import LeaderboardTemplate from "@/components/templates/LeaderboardTemplate/LeaderboardTemplate";
import useRanking from "@/hooks/useRanking";

function LeaderboardPage() {
  const { data, isError, isFetching, isSuccess } = useRanking();

  return (
    <LeaderboardTemplate
      ranking={data}
      isSuccess={isSuccess}
      isLoading={isFetching}
      isError={isError}
    />
  );
}

export default LeaderboardPage;
