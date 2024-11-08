import TextAtom from "@/components/atoms/TextAtom";

interface NameGuildMoleculeProps {
  name: string;
  guild?: string;
}

function NameGuildMolecule(props: NameGuildMoleculeProps) {
  const { name, guild } = props;

  return (
    <div className="basis-full ml-10 flex flex-col">
      <TextAtom size="medium">{name}</TextAtom>
      <TextAtom size="xsmall" color="gray">
        {guild}
      </TextAtom>
    </div>
  );
}

export default NameGuildMolecule;
