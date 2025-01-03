import TextAtom from "@/components/atoms/TextAtom";
import medium from "@/assets/images/medium.png";
import linkedIn from "@/assets/images/linked-in.png";

function LeftSideOrganism() {
  return (
    <div className="hidden lg:flex items-end justify-center [writing-mode:_vertical-rl] 
    max-w-[7.5rem] w-full shrink-0 space-y-8">
      <TextAtom
        size="3xsmall"
        font="inter"
        color="gray"
        className="tracking-[0.063rem] uppercase"
      >
        Copyright Zero x And, Pte. Ltd All right reserved.
      </TextAtom>

      <img src={medium} alt="medium" className="w-[1.375rem]" />
      <img
        src={linkedIn}
        alt="linkedIn"
        className="w-[1.375rem] h-[1.375rem]"
      />
    </div>
  );
}

export default LeftSideOrganism;
