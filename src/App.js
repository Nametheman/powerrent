import React from "react";
import Navbar from "Components/Navbar";
import styled from "styled-components";
import Header from "Components/Header";
import Accordion from "Components/Accordion";
import Products from "Components/Products";
function App() {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <Products />
      <Accordion />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  padding: 0 0 90px;
`;
