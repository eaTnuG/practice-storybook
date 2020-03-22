import React from "react";
import TextInput from "./index";
import { SignUpContainer } from "../../containers";

export default {
  component: TextInput,
  title: "TextInput",
  decorators: [textinput => <SignUpContainer>{textinput()}</SignUpContainer>]
};

export const basic = () => <TextInput label={"이름"} />;

export const withLongLabel = () => <TextInput label={"무진장 긴 이름"} />;
