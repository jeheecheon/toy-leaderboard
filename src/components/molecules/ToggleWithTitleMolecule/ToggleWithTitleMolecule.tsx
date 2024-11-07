import TextAtom from "@/components/atoms/TextAtom";
import ToggleSwitchAtom from "@/components/atoms/ToggleSwitchAtom";

interface ToggleWithTitleMoleculeProps {
  titleWhenOn: string;
  titleWhenOff: string;
  isOn: boolean;
  onClick: () => void;
}

function ToggleWithTitleMolecule(props: ToggleWithTitleMoleculeProps) {
  const { titleWhenOn, titleWhenOff, isOn, onClick } = props;

  return (
    <div className="w-20 flex flex-col items-center">
      <TextAtom size="small" color="gray">
        {isOn ? titleWhenOn : titleWhenOff}
      </TextAtom>
      <ToggleSwitchAtom isOn={isOn} onClick={onClick} />
    </div>
  );
}

export default ToggleWithTitleMolecule;
