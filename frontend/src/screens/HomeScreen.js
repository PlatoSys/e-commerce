import React, {useState, useEffect} from "react";
import { Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from 'axios';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
        axios.get('/api/products/')
        .then(response => setProducts(response.data));
  }, [])

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
