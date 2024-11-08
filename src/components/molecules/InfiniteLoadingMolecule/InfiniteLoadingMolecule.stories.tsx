import type { Meta, StoryObj } from "@storybook/react";
import InfiniteLoadingMolecule from "@/components/molecules/InfiniteLoadingMolecule";

const meta = {
  title: "Molecules/InfiniteLoading",
  component: InfiniteLoadingMolecule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InfiniteLoadingMolecule>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
