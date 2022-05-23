// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Wrapper as WrapperComponent } from "../../styles/styles";

export default {
  title: "Wrapper",
  component: WrapperComponent,
} as ComponentMeta<typeof WrapperComponent>;

export const Wrapper: ComponentStory<typeof WrapperComponent> = () => (
  <WrapperComponent>Envelops elements inside it</WrapperComponent>
);