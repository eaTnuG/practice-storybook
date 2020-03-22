import React from "react";
import styled from "styled-components";
import TextInputComponent from "../../components/TextInputComponent";
const SignUpContainer = () => (
  <Wrapper>
    <TextInputComponent label={"이름"} />
  </Wrapper>
);

export default SignUpContainer;

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  background: ivory;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
