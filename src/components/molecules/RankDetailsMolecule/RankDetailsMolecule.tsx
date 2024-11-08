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
    <div className="flex flex-col md:flex-row px-5 gap-x-2 sm:gap-x-6 lg:gap-x-3">
      <div className="lg:w-20 flex flex-col shrink-0">
        <div className="flex">
          <TextAtom size="xsmall" color="highlight">
            {"win: "}
          </TextAtom>
          <TextAtom size="xsmall">{wins}</TextAtom>
        </div>
        <div className="flex">
          <TextAtom size="xsmall" color="highlight">
            {"losse: "}
          </TextAtom>
          <TextAtom size="xsmall">{losses}</TextAtom>
        </div>
      </div>

      <div className="lg:w-24 flex flex-col shrink-0">
        <div className="flex">
          <TextAtom size="xsmall" color="highlight" className="text-nowrap">
            {"win rate: "}
          </TextAtom>
          <TextAtom size="xsmall">{winRate}</TextAtom>
        </div>
        <div className="flex">
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
