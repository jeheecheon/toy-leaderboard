import type { Meta, StoryObj } from "@storybook/react";
import SortOptionMolecule from "@/components/molecules/SortOptionMolecule";

const meta = {
  title: "Molecules/SortOption",
  component: SortOptionMolecule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SortOptionMolecule>;

export default meta;

type story = StoryObj<typeof meta>;

export const wins: story = {
  args: {
    sortOption: "wins",
    title: "wins",
  },
}

export const losses: story = {
  args: {
    sortOption: "losses",
    title: "losses",
  },
}

export const score: story = {
  args: {
    sortOption: "score",
    title: "score",
  },
}

export const winRate: story = {
  args: {
    sortOption: "winRate",
    title: "win rate",
  },
}
