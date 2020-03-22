import React from "react";
import styled from "styled-components";
import { Footer, Header } from "../../components";
import { SignUpContainer } from "../../containers";

const Home = () => (
  <Container>
    <Screen>
      <Header content={"헤더입니다"} />
      <SignUpContainer />
      <Footer content={"푸터입니다"} />
    </Screen>
  </Container>
);

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Screen = styled.div`
  width: 400px;
  height: 700px;
  overflow: auto;
`;
