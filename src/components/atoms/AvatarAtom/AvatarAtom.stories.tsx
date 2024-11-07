import type { Meta, StoryObj } from "@storybook/react";
import AvatarAtom from "@/components/atoms/AvatarAtom";

const meta = {
  title: "Atoms/Avatar",
  component: AvatarAtom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
      name: "Jehee Cheon"
  }
} satisfies Meta<typeof AvatarAtom>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
