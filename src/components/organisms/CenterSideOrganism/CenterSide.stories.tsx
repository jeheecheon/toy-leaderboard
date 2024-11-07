import type { Meta, StoryObj } from "@storybook/react";
import CenterSideOrganism from "@/components/organisms/CenterSideOrganism";

const meta = {
  title: "Organisms/CenterSide",
  component: CenterSideOrganism,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CenterSideOrganism>;

export default meta;

type story = StoryObj<typeof meta>;

export const Primary: story = {};
