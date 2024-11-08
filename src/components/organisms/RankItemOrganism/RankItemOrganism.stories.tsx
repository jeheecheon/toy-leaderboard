import type { Meta, StoryObj } from "@storybook/react";
import RankItemOrganism from "@/components/organisms/RankItemOrganism";
import { SortBy } from "@/constants";

const meta = {
  title: "Organisms/RankItem",
  component: RankItemOrganism,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    rank: {
      losses: 10,
      player: {
        id: 1,
        name: "John Doe",
        guild: {
          name: "Guild Name",
        },
      },
      score: 100,
      winRate: 0.5,
      wins: 10,
    },
    place: 1,
    display: SortBy.Score,
  },
} satisfies Meta<typeof RankItemOrganism>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
