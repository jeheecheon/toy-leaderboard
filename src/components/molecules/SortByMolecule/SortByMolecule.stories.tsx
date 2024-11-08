import type { Meta, StoryObj } from "@storybook/react";
import SortByMolecule from "@/components/molecules/SortByMolecule";
import { SortBy } from "@/constants";

const meta = {
  title: "Molecules/SortBy",
  component: SortByMolecule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SortByMolecule>;

export default meta;

type story = StoryObj<typeof meta>;

export const wins: story = {
  args: {
    sortBy: SortBy.Wins,
    title: "wins",
  },
};

export const losses: story = {
  args: {
    sortBy: SortBy.Losses,
    title: "losses",
  },
};

export const score: story = {
  args: {
    sortBy: SortBy.Score,
    title: "score",
  },
};

export const winRate: story = {
  args: {
    sortBy: SortBy.WinRate,
    title: "win rate",
  },
};
