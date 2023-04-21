import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <h3 className="childName">
          PowerRent<span>®</span>
        </h3>
        <h3 className="parentName">SWATINI POWER</h3>
      </Logo>
      <LinksWrapper>
        <a href="">Products</a>
        <a href="">FAQs</a>
        <a href="">Swatini Power</a>
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
  .parentName {
    font-size: 15px;
    font-family: "Squada One", cursive;
    color: #38b6ff;
  }
  .childName {
    font-size: 25px;
    font-family: "Squada One", cursive;
    position: relative;
    span {
      font-family: "Mulish", sans-serif;
      font-size: 10px;
      position: absolute;
      top: 0.5rem;
    }
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 20%;
`;
