import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.scss";

const Login = ({ show, close }) => {

  const handleClose = () => {
    close();
  };

  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
            // onChange={handleProductName}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
            // onChange={handleChangeQuantity}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="col-12" style={{ color: "red" }}>

          </div>
          <Button
            variant="primary"
            type="submit"
            //   onClick={() => this.handleLogin}
            className="btn-login"
          >
            Log in
          </Button>
          <div className="col-12">
            <span>Forgot your password?</span>
          </div>
          <div className="col-12 text-center mt-3">
            <span className="text-other-login">Or Login with:</span>
          </div>
          <div className="col-12 social-login">
            <i class="fab fa-google-plus-g google"></i>
            <i class="fab fa-facebook-f facebook"></i>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
