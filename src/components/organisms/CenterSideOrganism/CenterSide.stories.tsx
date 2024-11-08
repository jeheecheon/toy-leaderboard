import type { Meta, StoryObj } from "@storybook/react";
import CenterSideOrganism from "@/components/organisms/CenterSideOrganism";

const meta = {
  title: "Organisms/CenterSide",
  component: CenterSideOrganism,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    isError: false,
    isLoading: false,
    isSuccess: false,
    ranking: [
      {
        score: 100,
        winRate: 0.5,
        losses: 10,
        wins: 10,
        player: { id: 1, name: "John Doe", guild: { name: "Guild Name" } },
      },
    ],
  },
} satisfies Meta<typeof CenterSideOrganism>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
