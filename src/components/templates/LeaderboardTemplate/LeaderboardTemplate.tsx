import CenterSideOrganism from "@/components/organisms/CenterSideOrganism";
import HeaderOrganism from "@/components/organisms/HeaderOrganism";
import LeftSideOrganism from "@/components/organisms/LeftSideOrganism";
import RightSideOrganism from "@/components/organisms/RightSideOrganism/RightSideOrganism";
import { Rank } from "@/stores/ranking";

interface LeaderboardTemplateProps {
  ranking: Rank[];
  isSuccess: boolean;
  isError: boolean;
}

function LeaderboardTemplate(props: LeaderboardTemplateProps) {
  const { ranking, isSuccess, isError } = props;

  return (
    <div className="flex flex-col px-6 lg:px-10 h-full w-full">
      <HeaderOrganism />

      <div className="flex h-full w-full">
        <LeftSideOrganism />
        <CenterSideOrganism
          ranking={ranking}
          isSuccess={isSuccess}
          isError={isError}
        />
        <RightSideOrganism />
      </div>
    </div>
  );
}

export default LeaderboardTemplate;
