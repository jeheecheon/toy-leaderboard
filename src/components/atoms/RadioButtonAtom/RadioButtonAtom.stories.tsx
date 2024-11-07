import type { Meta, StoryObj } from "@storybook/react";
import RadioButtonAtom from "@/components/atoms/RadioButtonAtom";

const meta = {
  title: "Atoms/RadioButton",
  component: RadioButtonAtom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButtonAtom>;

export default meta;

type story = StoryObj<typeof meta>;

export const Selected: story = {
  args: {
    title: "10",
    isSelected: true,
    index: 0,
    onClick(index) {},
  },
};

export const NotSelected: story = {
  args: {
    title: "20",
    isSelected: false,
    index: 0,
    onClick(index) {},
  },
};
