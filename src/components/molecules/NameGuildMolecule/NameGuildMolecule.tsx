import TextAtom from "@/components/atoms/TextAtom";

interface NameGuildMoleculeProps {
  name: string;
  guild?: string;
}

function NameGuildMolecule(props: NameGuildMoleculeProps) {
  const { name, guild } = props;

  return (
    <div className="lg:ml-6 flex flex-col basis-full">
      <TextAtom size="medium" className="pr-2 whitespace-break-spaces break-words">{name}</TextAtom>
      <TextAtom size="xsmall" color="gray">
        {guild}
      </TextAtom>
    </div>
  );
}

export default NameGuildMolecule;
