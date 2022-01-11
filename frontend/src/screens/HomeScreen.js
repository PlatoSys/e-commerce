import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useNavigate, useLocation  } from "react-router-dom";

function HomeScreen() {
  const dispatch = useDispatch();
  const location = useLocation();

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  let keyword = location.search
  useEffect(() => {
    dispatch(listProducts(keyword));

  }, [dispatch, keyword]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row lg={"2px"}>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
