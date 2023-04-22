import React from "react";
import styled from "styled-components";
import gen1 from "Assets/Images/generator1.jpeg";
import gen2 from "Assets/Images/generator2.jpeg";

const Products = () => {
  return (
    <Container>
      <h3 className="head">Our Products</h3>
      <ProductsWrapper>
        <div className="product">
          <img src={gen1} alt="" />
          <div className="productDesc">
            <p className="specs">50KVA Generator</p>
            <p className="status">
              Status: <span className="blip"></span> Available
            </p>
          </div>
        </div>
        <div className="product">
          <img src={gen2} alt="" />
          <div className="productDesc">
            <p className="specs">40KVA Generator</p>
            <p className="status">
              Status: <span className="blip"></span> Available
            </p>
          </div>
        </div>
      </ProductsWrapper>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  margin-top: 90px;
  padding: 20px 70px;

  .head {
    margin: 10px 0 30px;
    text-align: center;
    font-size: 29px;
    font-weight: 800;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  .product {
    background: #fff;
    box-shadow: 0px 0px 32px 2px rgba(56, 182, 255, 0.07);
    -webkit-box-shadow: 0px 0px 32px 2px rgba(56, 182, 255, 0.07);
    -moz-box-shadow: 0px 0px 32px 2px rgba(56, 182, 255, 0.07);
    width: 400px;
    padding: 10px 10px 40px;
    border-radius: 30px;

    img {
      width: 400px;
      height: 300px;
      border-radius: 30px;
    }
    .productDesc {
      margin: 30px 10px;

      .specs {
        font-size: 26px;
        font-weight: 900;
        letter-spacing: 1.2px;
        color: #5c5757;
      }
      .status {
        margin-top: 20px;
        font-size: 14px;

        .blip {
          background: #0e814a;
          width: 10px;
          height: 10px;
        }
      }
    }
  }
`;
