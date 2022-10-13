import React from "react";
import { observer } from "mobx-react";
import { Button, Form } from "react-bootstrap";

const $btn = "f6 link dim bn br2 ph3 pv2 mr2 dib white bg-dark-blue";

export default observer(({ myForm }) => (
  <Form
    style={{
      border: "1px solid gray",
      alignItems: "center",
      padding: "10px",
      borderRadius: "5px",
      justifyContent: "center",
      minWidth: "35%",
    }}
    onSubmit={myForm.onSubmit}
  >
    <Form.Group className="mb-3" controlId={"firstName"}>
      <Form.Label>{myForm.$("firstName").label}</Form.Label>
      <Form.Control
        style={{ borderColor: myForm.$("firstName").error ? "red" : "" }}
        type="firstName"
        placeholder={myForm.$("firstName").placeholder}
        {...myForm.$("firstName").bind()}
      />
      <p style={{ color: "red" }}> {myForm.$("firstName").error}</p>
    </Form.Group>

    <Form.Group className="mb-3" controlId={"lastName"}>
      <Form.Label>{myForm.$("lastName").label}</Form.Label>
      <Form.Control
        style={{ borderColor: myForm.$("lastName").error ? "red" : "" }}
        type="lastName"
        placeholder={myForm.$("lastName").placeholder}
        {...myForm.$("lastName").bind()}
      />
      <p style={{ color: "red" }}> {myForm.$("lastName").error}</p>
    </Form.Group>

    <Form.Group className="mb-3" controlId={"email"}>
      <Form.Label>{myForm.$("email").label}</Form.Label>
      <Form.Control
        style={{ borderColor: myForm.$("email").error ? "red" : "" }}
        type="email"
        placeholder={myForm.$("email").placeholder}
        {...myForm.$("email").bind()}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
      <p style={{ color: "red" }}> {myForm.$("email").error}</p>
    </Form.Group>

    <Form.Group className="mb-3" controlId={"password"}>
      <Form.Label>{myForm.$("password").label}</Form.Label>
      <Form.Control
        style={{ borderColor: myForm.$("password").error ? "red" : "" }}
        type="password"
        placeholder={myForm.$("password").placeholder}
        {...myForm.$("password").bind()}
      />
      <p style={{ color: "red" }}> {myForm.$("password").error}</p>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="outline-success" type="submit">
      Submit
    </Button>
  </Form>
));
