import RadioButtonAtom from "@/components/atoms/RadioButtonAtom/RadioButtonAtom";
import { twMerge } from "tailwind-merge";

interface RadioGroupMoleculeProps {
  radioButtonTitles: readonly string[];
  selectedIndex: number;
  onClick: (index: number) => void;
  className?: string;
}

function RadioGroupMolecule(props: RadioGroupMoleculeProps) {
  const { radioButtonTitles, selectedIndex, onClick, className } = props;

  return (
    <div className={twMerge("flex flex-col lg:flex-row lg:py-6 gap-5", className)}>
      {radioButtonTitles.map((title, index) => (
        <RadioButtonAtom
          key={title}
          title={title}
          index={index}
          onClick={onClick}
          isSelected={index === selectedIndex}
        />
      ))}
    </div>
  );
}

export default RadioGroupMolecule;
