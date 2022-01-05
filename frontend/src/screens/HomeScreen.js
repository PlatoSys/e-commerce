import React from "react";
import products from "../products";
import { Row } from "react-bootstrap";
import Product from "../components/Product";

function HomeScreen() {
  return (
    <div>
      <h1>Latest Products</h1>

      <Row lg={"2px"}>
        {products.map((product) => (
            <Product key={product._id} product={product} />
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
