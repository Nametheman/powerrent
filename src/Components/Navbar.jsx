import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <h3 className="childName">
          Power<span className="rent">Rent</span>
          <span className="rSign">®</span>
        </h3>
        <h3 className="parentName">SWATINI POWER</h3>
      </Logo>
      <LinksWrapper>
        <a href="#products">Products</a>
        <a href="#faqs">FAQs</a>
        <a href="https://www.swatinipower.com/">Swatini Power</a>
      </LinksWrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  padding: 1% 7%;
  display: flex;
  align-items: center;
  /* color: #38b6ff */
`;
const Logo = styled.div`
  width: 20%;
  text-align: center;
  @media only screen and (max-width: 450px) {
    width: 30%;
  }
  .parentName {
    font-size: 15px;
    font-family: "Squada One", cursive;
    color: #000;

    @media only screen and (max-width: 450px) {
      font-size: 12px;
    }
  }
  .childName {
    font-size: 25px;
    font-family: "Gothic A1", sans-serif;
    font-weight: bold;
    position: relative;

    @media only screen and (max-width: 450px) {
      font-size: 17px;
    }
    .rent {
      color: tomato;
    }
    .rSign {
      font-family: "Mulish", sans-serif;
      font-size: 10px;
      position: absolute;
      top: 0.5rem;
      @media only screen and (max-width: 450px) {
        top: 0;
      }
    }
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 20%;
  color: #5c5757;

  @media only screen and (max-width: 450px) {
    display: none;
  }
`;
