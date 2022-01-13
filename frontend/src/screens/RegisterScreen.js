import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

function RegisterScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("search")
    ? searchParams.get("search")
    : null;

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, error, loading } = userRegister;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (userInfo) {
      navigate(`/`);
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <React.Fragment>
      <FormContainer>
        {loading && <Loader />}

        <h1>Sign In</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name" className="my-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email" className="my-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password" className="my-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter password"
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="passwordConfirm" className="my-2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              autoComplete="on"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary" className="my-2">
            Sign up
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Have an Account?{" "}
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Sign in here
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </React.Fragment>
  );
}

export default RegisterScreen;
