import type { Meta, StoryObj } from "@storybook/react";
import RankingSortOptionsMolecule from "@/components/molecules/RankingSortOptionsMolecule";

const meta = {
  title: "Molecules/RankingSortOptions",
  component: RankingSortOptionsMolecule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    wins: 10,
    losses: 10,
    winRate: 0.5,
    score: 100,
  },
} satisfies Meta<typeof RankingSortOptionsMolecule>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
