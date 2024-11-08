import TextAtom from "@/components/atoms/TextAtom";

interface HighlightDisplayMoleculeProps {
  display: string;
  value: number;
}

function HighlightDisplayMolecule(props: HighlightDisplayMoleculeProps) {
  const { display, value } = props;

  return (
    <div className="flex flex-col items-center bg-stone-800 px-4 h-24 lg:h-14 justify-center rounded-r-lg">
      <TextAtom size="xsmall" className="shrink-0" color="highlight">
        {display}
      </TextAtom>
      <TextAtom>{value}</TextAtom>
    </div>
  );
}

export default HighlightDisplayMolecule;
