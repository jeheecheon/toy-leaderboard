import AvatarAtom from "@/components/atoms/AvatarAtom";
import TextAtom from "@/components/atoms/TextAtom";
import HighlightDisplayMolecule from "@/components/molecules/HighlightDisplayMolecule";
import NameGuildMolecule from "@/components/molecules/NameGuildMolecule";
import RankDetailsMolecule from "@/components/molecules/RankDetailsMolecule";
import { SortBy } from "@/constants";
import { Rank } from "@/stores/ranking";
import { getOrdinalSuffix } from "@/utils/ranking";

interface RankItemOrganismProps {
  rank: Rank;
  place: number;
  display: SortBy;
}

function RankItemOrganism(props: RankItemOrganismProps) {
  const { rank, place, display } = props;

  return (
    <div
      key={rank.player.id}
      className="flex items-center justify-between border border-gray-50/10 bg-gray-50/5
      rounded-lg pl-3 lg:pl-4 lg:max-w-[40rem] w-full 
      hover:-translate-y-2 transition-transform duration-200"
    >
      <TextAtom className="w-12 lg:w-16 shrink-0 text-sm lg:text-base">{getOrdinalSuffix(place)}</TextAtom>

      <AvatarAtom
        size="medium"
        name={rank.player.name}
        className="scale-125 shrink-0 [will-change:_scale] hidden lg:flex"
      />

      <NameGuildMolecule
        name={rank.player.name}
        guild={rank.player.guild?.name}
      />

      <RankDetailsMolecule
        winRate={rank.winRate}
        wins={rank.wins}
        score={rank.score}
        losses={rank.losses}
      />

      <HighlightDisplayMolecule display={display} value={rank[display]} />
    </div>
  );
}

export default RankItemOrganism;
