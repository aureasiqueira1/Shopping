import React from "react";

import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { Container, Voltar } from "./styles.js";
import ProductCardDetails from "../ProductCardDetails/ProductCardDetails.jsx";

function ProductDetail() {
  const itemProduct = JSON.parse(localStorage.getItem("product"));

  return (
    <Container>
      <Link to="/home">
        <IoMdArrowBack className="back" />
        <Voltar>Voltar</Voltar>
      </Link>
      <ProductCardDetails key={itemProduct.id} data={itemProduct} />
    </Container>
  );
}

export default ProductDetail;
