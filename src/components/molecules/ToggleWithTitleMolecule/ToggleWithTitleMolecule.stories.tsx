import type { Meta, StoryObj } from "@storybook/react";
import ToggleWithTitleMolecule from "@/components/molecules/ToggleWithTitleMolecule";

const meta = {
  title: "Molecules/ToggleWithTitle",
  component: ToggleWithTitleMolecule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    isOn: false,
    titleWhenOff: "Descending",
    titleWhenOn: "Ascending",
    onClick() {},
  },
} satisfies Meta<typeof ToggleWithTitleMolecule>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
