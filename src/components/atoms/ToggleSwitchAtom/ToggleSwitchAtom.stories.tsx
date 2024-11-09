import type { Meta, StoryObj } from "@storybook/react";
import ToggleSwitchAtom from "@/components/atoms/ToggleSwitchAtom";

const meta = {
  title: "Atoms/ToggleSwitch",
  component: ToggleSwitchAtom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    isOn: false,
    onClick: () => {},
  }
} satisfies Meta<typeof ToggleSwitchAtom>;

export default meta;

type story = StoryObj<typeof meta>;

export const Primary: story = {};
