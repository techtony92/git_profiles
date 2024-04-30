import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "../../components/ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  render: () => <ProfileCard />,
};
