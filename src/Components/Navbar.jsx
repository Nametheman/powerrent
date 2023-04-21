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
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  padding: 1% 7%;
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
