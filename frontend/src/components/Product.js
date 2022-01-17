import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Card className="my-3 p-3 rounded">
        Product
        <Link to={`/products/${product._id}`}>
          <Card.Img
            src={product.image}
            alt={product.name}
            height={"auto"}
            width={"auto"}
          />
        </Link>
        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <div className="my-3">
              {product.rating} from {product.numReviews}
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </div>
          </Card.Text>

          <Card.Text as="h2" style={{ padding: "1rem" }}>
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
