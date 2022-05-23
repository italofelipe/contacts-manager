import { faAdd, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RoundedButton } from "../../styles/styles";

export default {
  title: "RoundedButton",
  argTypes: {
    variant: {
      options: ["update", "delete", "add"],
      control: { type: "radio" },
    },
  },
  component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

export const RoundedButtonAdd: ComponentStory<typeof RoundedButton> = (
  args
) => (
  <RoundedButton {...args}>
    <FontAwesomeIcon icon={faAdd} size="lg" />
  </RoundedButton>
);

export const RoundedButtonPencil: ComponentStory<typeof RoundedButton> = (
  args
) => (
  <RoundedButton {...args}>
    <FontAwesomeIcon icon={faTrash} size="lg" />
  </RoundedButton>
);

export const RoundedButtonTrash: ComponentStory<typeof RoundedButton> = (
  args
) => (
  <RoundedButton {...args}>
    <FontAwesomeIcon icon={faPencil} size="lg" />
  </RoundedButton>
);
