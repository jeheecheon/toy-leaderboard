import type { Meta, StoryObj } from "@storybook/react";
import HighlightDisplayMolecule from "@/components/molecules/HighlightDisplayMolecule";

const meta = {
  title: "Molecules/HighlightDisplay",
  component: HighlightDisplayMolecule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    display: "Wins",
    value: 10,
  },
} satisfies Meta<typeof HighlightDisplayMolecule>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
