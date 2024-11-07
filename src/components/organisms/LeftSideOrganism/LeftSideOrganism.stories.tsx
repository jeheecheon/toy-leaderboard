import type { Meta, StoryObj } from "@storybook/react";
import LeftSideOrganism from "@/components/organisms/LeftSideOrganism";

const meta = {
  title: "Organisms/LeftSide",
  component: LeftSideOrganism,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LeftSideOrganism>;

export default meta;

type story = StoryObj<typeof meta>;

export const Primary: story = {};
