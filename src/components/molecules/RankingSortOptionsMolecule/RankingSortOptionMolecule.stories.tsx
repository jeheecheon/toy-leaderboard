import type { Meta, StoryObj } from "@storybook/react";
import RankingSortOptionsMolecule from "@/components/molecules/RankingSortOptionsMolecule";

const meta = {
  title: "Molecules/RankingSortOptions",
  component: RankingSortOptionsMolecule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RankingSortOptionsMolecule>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
