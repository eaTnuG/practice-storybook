import React from "react";
import styled from "styled-components";

const TextInputComponent = ({ label }) => (
  <Wrapper>
    <Label>{`${label} : `}</Label>
    <Input></Input>
  </Wrapper>
);

export default TextInputComponent;

const Wrapper = styled.div`
  width: 90%;
  height: 50px;
  border-bottom: 1px solid black;
  padding: 3%;
  display: flex;
  justify-content: space-between;
`;
const Label = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
