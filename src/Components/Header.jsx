import React from "react";
import styled from "styled-components";
import generator from "Assets/Images/lighti-large.jpeg";
import circle from "Assets/Illustrations/circle2.svg";
import HeaderCard from "./HeaderCard";

import { CiDesktop, CiSearch, CiChat2, CiCircleCheck } from "react-icons/ci";

const Header = () => {
  const stepList = [
    {
      icon: <CiDesktop />,
      title: "Visit Our Website",
      text: "You are at the right place. We are ready to offer you energy for your next big event.",
    },
    {
      icon: <CiSearch />,
      title: "Search From Our List",
      text: "Go through our list of generators and power sources for what fit your need best.",
    },
    {
      icon: <CiChat2 />,
      title: "Reach Out To Us",
      text: "Use the chat button to talk to us or chat us on WhatsApp to discuss how to best serve you.",
    },
    {
      icon: <CiCircleCheck />,
      title: "Receive Your Item",
      text: "We will take care of delivering the generator to your desired location. Enjoy uninterrupted power source with the best hands",
    },
  ];
  return (
    <Container>
      <img src={circle} alt="" className="circle" />
      <h3 className="headerH3">
        Easy Energy on the go with <span>PowerRent</span>
      </h3>
      <p className="headerIntro">
        Swatini PowerRent® is a leading provider of generator rentals, offering
        a range of solutions to meet <br /> the diverse power needs of
        businesses, events, and communities.
      </p>
      <div className="headerBigImgWrapper">
        <img src={generator} alt="" className="headerBigImg" />
      </div>
      <CardWrapper>
        {stepList.map((list, idx) => {
          return (
            <HeaderCard
              key={idx}
              icon={list.icon}
              title={list.title}
              text={list.text}
            />
          );
        })}
      </CardWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin-top: 100px;
  padding: 20px 70px;
  @media only screen and (max-width: 450px) {
    padding: 20px;
  }
  position: relative;
  .circle {
    position: absolute;
    width: 350px;
    z-index: -1;
    left: 20%;
    top: -1%;
    opacity: 0.2;
  }
  .headerH3 {
    text-align: center;
    font-size: 29px;
    font-weight: 800;
    /* color: #5c5757; */

    span {
      color: tomato;
    }
  }
  .headerIntro {
    text-align: center;
    font-size: 16px;
    margin-top: 40px;
    font-weight: 500;
    letter-spacing: 1.2px;
    color: #5c5757;

    @media only screen and (max-width: 450px) {
      font-size: 13px;
    }
  }

  .headerBigImgWrapper {
    display: flex;
    margin-top: 90px;
    justify-content: center;
    .headerBigImg {
      width: 80%;
      height: 650px;
      border-radius: 30px;

      @media only screen and (max-width: 450px) {
        width: 90%;
        height: 300px;
      }
    }
  }
`;

const CardWrapper = styled.div`
  margin-top: 90px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;
