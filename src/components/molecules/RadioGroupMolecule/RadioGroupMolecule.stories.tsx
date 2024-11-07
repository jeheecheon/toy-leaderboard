import type { Meta, StoryObj } from "@storybook/react";
import RadioGroupMolecule from "@/components/molecules/RadioGroupMolecule";

const meta = {
  title: "Molecules/RadioGroup",
  component: RadioGroupMolecule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroupMolecule>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {
  args: {
    radioButtonTitles: ["10", "15", "20"],
    selectedIndex: 0,
    onClick: () => {},
  },
};
