import type { Meta, StoryObj } from "@storybook/react";
import HeaderOrganism from "@/components/organisms/HeaderOrganism";

const meta = {
  title: "Organisms/Header",
  component: HeaderOrganism,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderOrganism>;

export default meta;

type story = StoryObj<typeof meta>;

export const Primary: story = {};
