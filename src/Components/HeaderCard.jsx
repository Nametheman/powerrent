import React from "react";
import styled from "styled-components";
import { CiDesktop } from "react-icons/ci";
import line from "Assets/Illustrations/linewave.svg";

const HeaderCard = ({ icon, title, text }) => {
  return (
    <Card>
      <div className="icon">{icon} </div>
      <h4 className="levelHead">{title}</h4>
      <p className="levelBody">{text}</p>
      <img className="line" src={line} alt="" />
    </Card>
  );
};

export default HeaderCard;

const Card = styled.div`
  padding: 30px;
  width: 380px;
  height: 280px;
  box-shadow: 0px 0px 32px 2px rgba(56, 182, 255, 0.07);
  -webkit-box-shadow: 0px 0px 32px 2px rgba(56, 182, 255, 0.07);
  -moz-box-shadow: 0px 0px 32px 2px rgba(56, 182, 255, 0.07);
  position: relative;

  .icon {
    svg {
      font-size: 40px;
      color: #38b6ff;
    }
  }
  .levelHead {
    margin: 20px 0;
    font-weight: bold;
    font-size: 20px;
  }
  .levelBody {
    font-size: 15px;
    font-weight: 500;
    color: #5c5757;
  }
  .line {
    bottom: -55px;
    left: 20px;
    right: 0;
    position: absolute;
    width: 90%;
  }
`;
