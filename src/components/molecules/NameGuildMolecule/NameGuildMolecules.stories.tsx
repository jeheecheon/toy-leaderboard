import type { Meta, StoryObj } from "@storybook/react";
import NameGuildMolecule from "@/components/molecules/NameGuildMolecule";

const meta = {
  title: "Molecules/NameGuild",
  component: NameGuildMolecule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    name: "John Doe",
    guild: "Guild Name",
  },
} satisfies Meta<typeof NameGuildMolecule>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {
  args: {},
};
