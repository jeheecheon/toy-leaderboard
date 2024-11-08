import type { Meta, StoryObj } from "@storybook/react";
import RankDetailsMolecule from "@/components/molecules/RankDetailsMolecule";

const meta = {
  title: "Molecules/RankDetails",
  component: RankDetailsMolecule,
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
} satisfies Meta<typeof RankDetailsMolecule>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
