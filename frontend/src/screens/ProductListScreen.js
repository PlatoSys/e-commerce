import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Table, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { useNavigate, useLocation } from "react-router-dom";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
import Paginate from "../components/Paginate";

function ProductListScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  const { userInfo } = useSelector((state) => state.userLogin);

  let keyword = location.search;
  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo.isAdmin) {
      navigate(`/`);
    }
    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts(keyword));
    }
  }, [
    dispatch,
    navigate,
    createdProduct,
    userInfo,
    successDelete,
    successCreate,
    keyword,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("You want to delete product?")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = (product) => {
    dispatch(createProduct());
  };

  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button className="my-3 text-right" onClick={createProductHandler}>
            Create Product <i className="fas fa-plus"></i>
          </Button>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Brand</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>

                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <button variant="warning" className="btn btn-sm">
                        <i
                          className="fas fa-edit"
                          style={{ color: "black" }}
                        ></i>
                      </button>
                    </LinkContainer>

                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </div>
      )}
    </React.Fragment>
  );
}

export default ProductListScreen;
