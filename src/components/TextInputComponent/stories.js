import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import TextInputComponent from "./index";
import styled from "styled-components";

export default {
  component: TextInputComponent,
  title: "TextInput",
  decorators: [textinput => <Wrapper>{textinput()}</Wrapper>, withKnobs]
};

export const basic = () => {
  const label = text("label", "라벨");
  return <TextInputComponent label={label} />;
};

export const withLongLabel = () => {
  const longLabel = text("label", "무진장 긴 라벨");
  return <TextInputComponent label={longLabel} />;
};

export const onChange = () => <TextInputComponent label={"라벨"} onChange={action("텍스트 인풋")} />;

const Wrapper = styled.div`
  background: ivory;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
