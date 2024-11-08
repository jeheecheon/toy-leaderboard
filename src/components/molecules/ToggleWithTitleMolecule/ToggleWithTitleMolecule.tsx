import TextAtom from "@/components/atoms/TextAtom";
import ToggleSwitchAtom from "@/components/atoms/ToggleSwitchAtom";
import { twMerge } from "tailwind-merge";

interface ToggleWithTitleMoleculeProps {
  titleWhenOn: string;
  titleWhenOff: string;
  isOn: boolean;
  onClick: () => void;
  className?: string;
}

function ToggleWithTitleMolecule(props: ToggleWithTitleMoleculeProps) {
  const { titleWhenOn, titleWhenOff, isOn, onClick, className } = props;

  return (
    <div className={twMerge("w-20 flex flex-col items-center group", className)}>
      <TextAtom size="small" color="gray" className="group-hover:text-highlight">
        {isOn ? titleWhenOn : titleWhenOff}
      </TextAtom>
      <ToggleSwitchAtom isOn={isOn} onClick={onClick} />
    </div>
  );
}

export default ToggleWithTitleMolecule;
