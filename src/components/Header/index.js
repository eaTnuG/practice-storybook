import React from "react";
import styled from "styled-components";

const Header = ({ width, height, title }) => (
  <Wrapper width={width} height={height}>
    {title}
  </Wrapper>
);

export default Header;

const Wrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: white;
  border: 1px solid grey;
`;
