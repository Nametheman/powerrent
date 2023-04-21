import React from "react";
import styled from "styled-components";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="firstFooter">
        <h3 className="childName">
          PowerRent<span>®</span>
        </h3>
        <p className="childText">
          Renting a generator from Swatini PowerRent® eliminates the high
          upfront costs of purchasing a generator <br /> and the ongoing
          expenses of maintenance and storage.
        </p>
        <div className="socials">
          <a href="#">
            <AiFillFacebook />
          </a>
          <a href="#">
            <AiFillTwitterSquare />
          </a>
          <a href="#">
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
      <div className="secondFooter">
        <p>Copyright © 2023 Swatini Power. All rights reserved.</p>
        <p className="designedBy">
          Designed by: <span>Oracle Solutions</span>
        </p>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  height: 100px;
  color: #fff;

  .firstFooter {
    background: #1c1c1c;
    padding: 30px 0;

    .childName {
      font-size: 25px;
      font-family: "Squada One", cursive;
      position: relative;
      text-align: center;
      color: #dedede;

      span {
        font-family: "Mulish", sans-serif;
        font-size: 10px;
        position: absolute;
        top: 0.5rem;
      }
    }
    .childText {
      text-align: center;
      color: #afafaf;
      margin-top: 10px;
    }
    .socials {
      display: flex;
      justify-content: center;
      margin: 40px 0;
      gap: 20px;

      a {
        text-decoration: none;
        transition: 0.3s ease-in;

        svg {
          font-size: 30px;
          color: #dcf0fc;
        }

        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }
  .secondFooter {
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #afafaf;
    font-size: 14px;
    gap: 40px;

    .designedBy {
      span {
        color: #dcf0fcb1;
      }
    }
  }
`;
