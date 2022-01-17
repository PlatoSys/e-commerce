import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";

function ShippingScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address,
        city,
        country,
        postalCode,
      })
    );
    navigate("/payment");
  };

  return (
    <React.Fragment>
      <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address" className="my-2">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Address"
              value={address ? address : ""}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city" className="my-2">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter City"
              value={city ? city : ""}
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postalCode" className="my-2">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Postal Code"
              value={postalCode ? postalCode : ""}
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city" className="my-2">
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Country"
              value={country ? country : ""}
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
}

export default ShippingScreen;
