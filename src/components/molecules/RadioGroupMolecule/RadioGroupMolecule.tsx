import RadioButtonAtom from "@/components/atoms/RadioButtonAtom/RadioButtonAtom";

interface RadioGroupMoleculeProps {
  radioButtonTitles: readonly string[];
  selectedIndex: number;
  onClick: (index: number) => void;
}

function RadioGroupMolecule(props: RadioGroupMoleculeProps) {
  const { radioButtonTitles, selectedIndex, onClick } = props;

  return (
    <div className="flex py-6 gap-5">
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
