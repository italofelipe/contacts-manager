import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInput as Input } from "../../styles/styles";

export default {
  title: "TextInput",
  component: Input,
} as ComponentMeta<typeof Input>;

export const TextInput: ComponentStory<typeof Input> = () => (
  <Input placeholder="Type something" />
);
