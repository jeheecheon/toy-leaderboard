import type { Meta, StoryObj } from "@storybook/react";
import LeaderboardPage from "@/components/pages/LeaderbpardPage";

const meta = {
  title: "Pages/Leaderboard",
  component: LeaderboardPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LeaderboardPage>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
