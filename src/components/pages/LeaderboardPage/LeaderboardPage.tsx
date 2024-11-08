import LeaderboardTemplate from "@/components/templates/LeaderboardTemplate/LeaderboardTemplate";
import useRanking from "@/hooks/useRanking";

function LeaderboardPage() {
  const { data, isError, isSuccess } = useRanking();

  return (
    <LeaderboardTemplate
      ranking={data}
      isSuccess={isSuccess}
      isError={isError}
    />
  );
}

export default LeaderboardPage;
