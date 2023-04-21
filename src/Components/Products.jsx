import React from "react";
import styled from "styled-components";

const Products = () => {
  return (
    <Container>
      <h3 className="head">Our Products</h3>
      Products
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
