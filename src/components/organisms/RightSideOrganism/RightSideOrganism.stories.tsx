import type { Meta, StoryObj } from "@storybook/react";
import RightSideOrganism from "@/components/organisms/RightSideOrganism";

const meta = {
  title: "Organisms/RightSide",
  component: RightSideOrganism,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RightSideOrganism>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
