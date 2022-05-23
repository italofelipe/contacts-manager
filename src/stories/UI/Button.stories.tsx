import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../styles/styles";

export default {

  title: "Button",
  argTypes: {
    context: {
      options: ["create", "add"],
      control: { type: "radio"}
    }
  },
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (<Button {...args}>Button</Button>);

export const ButtonCreate = Template.bind({});

