import React from "react";
import styled from "styled-components";

const Header = ({ content }) => <Wrapper>{content}</Wrapper>;

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: green;
  color: ivory;
  padding: 1%;
  position: sticky;
  top: 0;
`;
