import type { Meta, StoryObj } from "@storybook/react";
import LeaderboardTemplate from "@/components/templates/LeaderboardTemplate";

const meta = {
  title: "Templates/Leaderboard",
  component: LeaderboardTemplate,
  parameters: {
    layout: "fullscreen",
  },
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
  }
} satisfies Meta<typeof LeaderboardTemplate>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
