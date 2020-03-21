import React from "react";
import styled from "styled-components";
const Footer = ({ width, height, content }) => (
  <Wrapper width={width} height={height}>
    {content}
  </Wrapper>
);

export default Footer;

const Wrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
`;
