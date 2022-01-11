import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation  } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();
  const location = useLocation();

  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if(keyword){
        navigate(`/?keyword=${keyword}`)
    } else {
        navigate(location.pathname)
    }
  };

  return (

    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2 mx-2">Search</Button>
    </Form>
  );
}

export default SearchBox;
