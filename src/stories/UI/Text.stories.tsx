import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "../../styles/styles";

export default {
  title: "Text",
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "radio" },
    },
    variant: {
      options: ["text", "danger", "info", "warning", "white"],
      control: { type: "radio" },
    },
    align: {
      options: ["center", "left", "right"],
      control: { type: "radio" },
    },
  },
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Telephonist is awesome!</Text>
);

export const ButtonCreate = Template.bind({});
