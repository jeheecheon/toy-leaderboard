import type { Meta, StoryObj } from "@storybook/react";
import LogoAtom from "@/components/atoms/LogoAtom";

const meta = {
  title: "Atoms/Logo",
  component: LogoAtom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LogoAtom>;

export default meta;

type story = StoryObj<typeof meta>;

export const Medium: story = {};
