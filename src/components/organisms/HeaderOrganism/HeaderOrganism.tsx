import LogoAtom from "@/components/atoms/LogoAtom";
import TextAtom from "@/components/atoms/TextAtom";

function HeaderOrganism() {
  return (
    <div className="z-10 flex items-center justify-between font-quantico lg:fixed lg:w-[calc(100%-80px)] pt-5 lg:pt-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-20">
        <LogoAtom />
        <TextAtom size="xsmall" color="gray" className="w-[8rem] lg:w-[8.5rem]">
          essential blocks for NFT gaming
        </TextAtom>
      </div>

      <button className="">
        <TextAtom
          size="xsmall"
          color="highlight"
          className="hidden lg:block lg:text-xs font-semibold"
        >
          ENGLISH
        </TextAtom>
        <TextAtom
          size="xsmall"
          color="highlight"
          className="block lg:hidden lg:text-xs font-semibold"
        >
          ENG
        </TextAtom>
      </button>
    </div>
  );
}

export default HeaderOrganism;
