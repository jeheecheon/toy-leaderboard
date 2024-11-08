import LogoAtom from "@/components/atoms/LogoAtom";
import TextAtom from "@/components/atoms/TextAtom";
import { Link } from "react-router-dom";

function HeaderOrganism() {
  return (
    <div className="z-10 flex items-center justify-between font-quantico lg:fixed lg:w-[calc(100%-80px)] 
    pt-5 lg:pt-10 pb-2">
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-20">
        <Link to="/leaderboard">
          <LogoAtom />
        </Link>

        <TextAtom size="xsmall" color="gray" className="w-[8rem] lg:w-[7rem]">
          essential blocks for NFT gaming
        </TextAtom>
      </div>

      <button className="">
        <TextAtom
          size="xsmall"
          color="highlight"
          weight="semibold"
          className="hidden lg:block lg:text-xs"
        >
          ENGLISH
        </TextAtom>
        <TextAtom
          size="xsmall"
          color="highlight"
          weight="semibold"
          className="block lg:hidden lg:text-xs"
        >
          ENG
        </TextAtom>
      </button>
    </div>
  );
}

export default HeaderOrganism;
