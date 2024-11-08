import CenterSideOrganism from "@/components/organisms/CenterSideOrganism";
import HeaderOrganism from "@/components/organisms/HeaderOrganism";
import LeftSideOrganism from "@/components/organisms/LeftSideOrganism";
import RightSideOrganism from "@/components/organisms/RightSideOrganism/RightSideOrganism";
import { Rank } from "@/stores/ranking";

interface LeaderboardTemplateProps {
  ranking: Rank[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

function LeaderboardTemplate(props: LeaderboardTemplateProps) {
  const { ranking, isLoading, isSuccess, isError } = props;

  return (
    <div className="bg-black w-screen h-screen flex flex-col px-6 lg:px-10">
      <HeaderOrganism />

      <div className="flex h-full w-full">
        <LeftSideOrganism />
        <CenterSideOrganism
          ranking={ranking}
          isSuccess={isSuccess}
          isLoading={isLoading}
          isError={isError}
        />
        <RightSideOrganism />
      </div>
    </div>
  );
}

export default LeaderboardTemplate;
