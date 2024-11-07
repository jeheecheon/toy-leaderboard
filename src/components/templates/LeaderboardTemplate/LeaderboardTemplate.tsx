import CenterSideOrganism from "@/components/organisms/CenterSideOrganism";
import HeaderOrganism from "@/components/organisms/HeaderOrganism";
import LeftSideOrganism from "@/components/organisms/LeftSideOrganism";
import RightSideOrganism from "@/components/organisms/RightSideOrganism/RightSideOrganism";

function LeaderboardTemplate() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col px-6 lg:px-10">
      <HeaderOrganism />

      <div className="flex h-full w-full">
        <LeftSideOrganism />
        <CenterSideOrganism />
        <RightSideOrganism />
      </div>
    </div>
  );
}

export default LeaderboardTemplate;
