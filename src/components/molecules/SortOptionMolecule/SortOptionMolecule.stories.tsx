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

export const Primary: story = {
  args: {
    sortOption: "wins",
  },
}
