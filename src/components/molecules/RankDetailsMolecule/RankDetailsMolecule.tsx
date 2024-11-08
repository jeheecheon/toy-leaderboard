import TextAtom from "@/components/atoms/TextAtom";

interface RankDetailsMoleculeProps {
  wins: number;
  losses: number;
  winRate: number;
  score: number;
}

function RankDetailsMolecule(props: RankDetailsMoleculeProps) {
  const { wins, losses, winRate, score } = props;

  return (
    <div className="flex">
      <div className="w-24 pl-5 flex flex-col shrink-0">
        <div>
          <TextAtom size="xsmall" color="highlight">
            {"win: "}
          </TextAtom>
          <TextAtom size="xsmall">{wins}</TextAtom>
        </div>
        <div>
          <TextAtom size="xsmall" color="highlight">
            {"losse: "}
          </TextAtom>
          <TextAtom size="xsmall">{losses}</TextAtom>
        </div>
      </div>

      <div className="w-40 px-5 flex flex-col shrink-0">
        <div>
          <TextAtom size="xsmall" color="highlight">
            {"win rate: "}
          </TextAtom>
          <TextAtom size="xsmall">{winRate}</TextAtom>
        </div>
        <div>
          <TextAtom size="xsmall" color="highlight">
            {"score: "}
          </TextAtom>
          <TextAtom size="xsmall">{score}</TextAtom>
        </div>
      </div>
    </div>
  );
}

export default RankDetailsMolecule;
