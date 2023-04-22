import React, { useState } from "react";
import Navbar from "Components/Navbar";
import styled from "styled-components";
import Header from "Components/Header";
import Accordion from "Components/Accordion";
import Products from "Components/Products";
import Footer from "Components/Footer";
import { BsTelephone } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
function App() {
  const [translateX, setTranslateX] = useState(100);

  const Wrapper = styled.main`
    .mobileNav {
      background-color: #fff;
      min-height: 100vh;
      height: 100vh;
      width: 70%;
      position: fixed;
      right: 0;
      top: 0;
      transform: translateX(${translateX}%);
      transition: transform 1.3s ease-in-out;
      .linksWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40%;
        gap: 30px;
        color: #38b6ff;
        font-weight: 600;
      }
    }
  `;

  return (
    <Wrapper>
      <Navbar />
      <Header />
      <div id="products">
        <Products />
      </div>
      <div id="faqs">
        <Accordion />
      </div>
      <Footer />
      <a href="tel:+2348033907077" className="phone">
        <BsTelephone />
      </a>
      <div className="mobileCaretOpen">
        <BiMenuAltRight
          onClick={() => {
            setTranslateX(0);
          }}
        />
      </div>
      <div className="mobileNav">
        <div className="mobileCaretOpen">
          <BiMenuAltRight
            onClick={() => {
              setTranslateX(100);
            }}
          />
        </div>

        <div className="linksWrapper">
          <a
            href="#products"
            onClick={() => {
              setTranslateX(100);
            }}
          >
            Products
          </a>
          <a
            href="#faqs"
            onClick={() => {
              setTranslateX(100);
            }}
          >
            FAQs
          </a>
          <a
            href="https://www.swatinipower.com/"
            onClick={() => {
              setTranslateX(100);
            }}
          >
            Swatini Power
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
