import type { Meta, StoryObj } from "@storybook/react";
import TextAtom from "@/components/atoms/TextAtom";

const meta = {
  title: "Atoms/Text",
  component: TextAtom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Hello, World!",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "highlight"],
    },
  },
} satisfies Meta<typeof TextAtom>;

export default meta;

type story = StoryObj<typeof meta>;

export const Primary: story = { args: { color: "primary" } };
export const Secondary: story = { args: { color: "secondary" } };
export const Highlight: story = { args: { color: "highlight" } };
