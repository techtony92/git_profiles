import type { Meta, StoryObj } from "@storybook/react";

import { ProfilePreview } from "../../components/ProfilePreview";

const meta: Meta<typeof ProfilePreview> = {
  component: ProfilePreview,
};

export default meta;
type Story = StoryObj<typeof ProfilePreview>;

/**
 * 👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 *
 * */

export const Primary: Story = {
  render: () => <ProfilePreview />,
};
