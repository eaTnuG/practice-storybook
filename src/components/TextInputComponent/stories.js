import React from "react";
import TextInput from "./index";

export default {
  component: TextInput,
  title: "TextInput"
};

export const basic = () => <TextInput label={"이름"} />;

export const withLongLabel = () => <TextInput label={"무진장 긴 이름"} />;
