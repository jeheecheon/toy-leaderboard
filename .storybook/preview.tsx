import React from "react";
import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import "@/assets/styles/app.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: (Story) => (
    <MemoryRouter initialEntries={["/"]}>
      <Story />
    </MemoryRouter>
  ),
};

export default preview;
