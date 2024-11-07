import type { Meta, StoryObj } from "@storybook/react";
import LeaderboardTemplate from "@/components/templates/LeaderboardTemplate";

const meta = {
  title: "Templates/Leaderboard",
  component: LeaderboardTemplate,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LeaderboardTemplate>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
