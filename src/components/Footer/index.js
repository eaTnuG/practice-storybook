import React from "react";
import styled from "styled-components";

const Footer = ({ content }) => <Wrapper>{content}</Wrapper>;

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
  color: ivory;
`;
