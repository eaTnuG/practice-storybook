import React from "react";
import styled from "styled-components";
import { Footer, Header } from "../../components";
const Home = () => (
  <Container>
    <Header width={"50%"} height={"20%"} title={"안녕"} />
    {/* <SignUpContainer /> */}
    <Footer width={"50%"} height={"20%"} content={"푸터"} />
  </Container>
);

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(235, 241, 236);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
